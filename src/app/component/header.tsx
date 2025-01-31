"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile, CgSearch, CgShoppingCart } from "react-icons/cg";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilterdProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `
                *[_type=="product"]{
                    _id,
                    name,
                    category,
                    description,
                    price,
                    "imageUrl": image.asset->url,
                }
            `
      );
      setProducts(data);
      setFilterdProducts(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilterdProducts(filtered);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[69px] w-[390] md:block md:w-[1440px] md:h-[132px]">
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap"
  />

  <div className="flex z-10 mt-[26px] h-[16px] gap-[10px] absolute ml-[208px] md:block">
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

    {searchQuery && filteredProducts.length > 0 && (
      <div className="absolute md:hidden bg-white w-[180px] left-0 top-4 border border-gray-200 rounded-lg shadow-lg z-10">
      <ul className="bg-white">
        {filteredProducts.map((product: Product) => (
          <li
            key={product._id}
            className="font-satoshi p-3 hover:bg-gray-100 transition-colors duration-200"
          >
            <Link
              href={`/product/${product._id}`}
              className="text-gray-800 hover:text-blue-600 block"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    )}

    <button onClick={toggleMenu} className="z-20 md:hidden">
      <Image
        src="/photos/Menu.png"
        alt="search"
        height={20}
        width={20}
        className="h-[16px] w-[16px] md:hidden"
      />
    </button>

    <div
      className={`absolute z-50 top-10 right-0 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } md:hidden`}
    >
      <ul className="p-4 space-y-2 font-satoshi text-gray-400">
        <Link href="/" passHref>
          <li className="active:bg-[rgb(42,37,75)] active:text-gray-200 rounded-sm">
            Home
          </li>
        </Link>
        <Link href="/about" passHref>
          <li className="active:bg-[rgb(42,37,75)] active:text-gray-200">
            About Us
          </li>
        </Link>
        <Link href="/product" passHref>
          <li className="active:bg-[rgb(42,37,75)] active:text-gray-200">
            Products
          </li>
        </Link>
        <Link href="/shopping" passHref>
          <li className="active:bg-[rgb(42,37,75)] active:text-gray-200">
            Shopping
          </li>
        </Link>
      </ul>
    </div>
  </div>

  <div className="relative flex">
  {/* Search Bar (Visible on Desktop) */}
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

    {/* Search Results Dropdown */}
    {searchQuery && filteredProducts.length > 0 && (
      <div className="absolute hidden md:block bg-white w-[265px] border border-gray-200 z-10 mt-2 rounded-lg shadow-lg">
        <ul>
          {filteredProducts.map((product: Product) => (
            <li key={product._id} className="font-satoshi p-2 hover:bg-gray-100">
              <Link
                href={`/product/${product._id}`}
                className="text-black hover:text-blue-600 block"
              >
                {product.name}
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

  <div className="hidden md:block md:max-w-[675px] md:max-h-[22px] md:absolute md:ml-[382px] md:mt-[20px]">
    <ul className="flex gap-[44px] font-satoshi text-gray-400">
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
