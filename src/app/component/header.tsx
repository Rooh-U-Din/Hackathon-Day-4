"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile, CgSearch, CgShoppingCart } from "react-icons/cg";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type=="product"]{
          _id,
          name,
          category,
          description,
          price,
          "imageUrl": image.asset->url
        }`
      );
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="w-full max-w-full h-[132px] bg-white shadow-md">
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap"
      />
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" passHref>
          <h1 className="font-clash text-2xl text-black cursor-pointer">
            Avion
          </h1>
        </Link>

        {/* Search Box */}
        <div className="relative flex items-center w-[300px] sm:w-[500px] md:w-[600px]">
          <input
            type="text"
            placeholder="Search Here"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full py-2 px-4 text-sm rounded-md border-2 border-gray-300 focus:outline-none"
          />
          <CgSearch className="absolute right-4 text-gray-500" />
          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white border border-gray-200 w-full mt-2 z-10 rounded-md">
              <ul className="bg-gray-100">
                {filteredProducts.map((product) => (
                  <li key={product._id} className="p-2">
                    <Link
                      href={`/product/${product._id}`}
                      className="text-black hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-6 items-center">
          <Link href="./shopping" passHref>
            <CgShoppingCart className="h-6 w-6 text-gray-600" />
          </Link>
          <Link href="./about" passHref>
            <CgProfile className="h-6 w-6 text-gray-600" />
          </Link>
        </div>
      </div>

      <Image
        src="/photos/Divider.png"
        alt="divider"
        height={2}
        width={1386}
        className="w-full"
      />

      {/* Categories for desktop */}
      <div className="hidden md:block bg-gray-100 py-2">
        <ul className="flex gap-8 justify-center font-satoshi text-gray-600">
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
