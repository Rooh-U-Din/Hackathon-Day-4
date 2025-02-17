"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {  CgProfile, CgSearch, CgShoppingCart } from "react-icons/cg";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type=="product"] | order(price asc) {
            _id,
            name,
            category,
            description,
            price,
            "imageUrl": image.asset->url,
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
    <div className="h-[69px] max-w-max md:max-w-[1440px] md:h-[132px]">
      {/* Search Bar (Mobile) */}
      <div className="flex z-10 mt-[26px] absolute ml-[208px] md:block">
        <div className="flex w-[120px] items-center border-2 border-gray-50 rounded overflow-hidden md:hidden">
          <input
            type="text"
            placeholder="Search Here"
            value={searchQuery}
            onChange={handleSearch}
            className="text-sm placeholder-gray-500 focus:outline-none"
          />
          <CgSearch className="ml-[-75px] h-[16px] w-[16px] md:hidden" />
        </div>

        {/* Search Results (Mobile) */}
        {searchQuery && filteredProducts.length > 0 && (
          <div className="absolute md:hidden bg-white w-[200px] border right-0 mt-6 max-h-72 overflow-scroll border-gray-200 rounded-lg shadow-lg z-10">
            <ul>
              {filteredProducts.map((product: Product) => (
                <li key={product._id} className="font-satoshi p-3 hover:bg-gray-100 flex items-center gap-2">
                  <Image src={product.imageUrl} alt={product.name} width={30} height={30} className="rounded" />
                  <Link href={`/product/${product._id}`} className="text-gray-800 hover:text-blue-600">
                    {product.name} - <span className="text-gray-600 font-bold">${product.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search Bar (Desktop) */}
      <div className="relative flex">
        <div className="hidden md:block absolute max-w-lg p-4 rounded-lg ml-2">
          <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Here"
              value={searchQuery}
              onChange={handleSearch}
              className="py-2 px-4 text-sm placeholder-gray-500 focus:outline-none flex-grow"
            />
            <CgSearch className="h-6 w-6 ml-4 mr-4 text-gray-500" />
          </div>

          {/* Search Results (Desktop) */}
          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white w-[300px] border border-gray-200 z-10 mt-2 rounded-lg shadow-lg">
              <ul>
                {filteredProducts.map((product: Product) => (
                  <li key={product._id} className="font-satoshi p-2 hover:bg-gray-100 flex items-center gap-3">
                    <Image src={product.imageUrl} alt={product.name} width={40} height={40} className="rounded" />
                    <Link href={`/product/${product._id}`} className="text-black hover:text-blue-600">
                      {product.name} - <span className="text-gray-600 font-bold">${product.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
     {/* Logo */}
  <Link href="/" passHref>
    <h1 className="h-[30px] w-[65px] mt-5 ml-6 font-clash text-2xl md:ml-[687px] md:mt-[20px] cursor-pointer">
      Avion
    </h1>
  </Link>

  {/* Icons (Visible on Desktop) */}
  <div className="flex mt-[26px] ml-auto h-[16px] gap-[20px] md:absolute xl:ml-[1364px] md:ml-[1200px]">
    <Link href="/shopping" passHref>
      <CgShoppingCart className="hidden md:block md:h-[16px] md:w-[16px] cursor-pointer" />
    </Link>
    <Link href="/about" passHref>
      <CgProfile className="hidden md:block md:h-[16px] md:w-[16px] cursor-pointer" />
    </Link>
  </div>
</div>

  <Image
    src="/photos/Divider.png"
    alt="divider"
    height={100}
    width={100}
    className="hidden md:block md:h-px md:w-[1386px] md:mt-[70px] md:ml-[28px]"
  />

  <div className="hidden md:block md:max-w-[695px] md:max-h-[22px] md:absolute md:ml-[382px] md:mt-[20px]">
  <ul className="flex gap-[44px] font-satoshi text-gray-400">
  <li>
    <Link href="/plant-pots">Plant pots</Link>
  </li>
  <li>
    <Link href="/ceramics">Ceramics</Link>
  </li>
  <li>
    <Link href="/tables">Tables</Link>
  </li>
  <li>
    <Link href="/chairs">Chairs</Link>
  </li>
  <li>
    <Link href="/crockery">Crockery</Link>
  </li>
  <li>
    <Link href="/tableware">Tableware</Link>
  </li>
  <li>
    <Link href="/cutlery">Cutlery</Link>
  </li>
</ul>


  </div>
</div>
  );
};
export default Header;
