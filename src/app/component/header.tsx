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
    <div className="  h-[69] md:block md:w-[1440] md:h-[132]">
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap"
      />

      <div className=" flex mt-[26] h-[16] gap-[10] absolute ml-[208] md:block">
        
        
          <div className="flex w-[120] items-center border-2 border-gray-300 rounded overflow-hidden md:hidden">
            <input
              type="text"
              placeholder="Search Here"
              value={searchQuery}
              onChange={handleSearch}
              className="text-sm placeholder-gray-500 focus:outline-none"
            />
            <CgSearch 
          className="ml-[-75] h-[16] w-[16] md:hidden"></CgSearch>

          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white w-[265] border border-gray-200 z-10">
              <ul className="bg-gray-100 ">
                {filteredProducts.map((product: Product) => (
                  <li key={product._id} className="font-satoshi">
                    <Link
                      href={`/product/${product._id}`}
                      className=" text-black hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button onClick={toggleMenu} className="z-20 md:hidden">
          <Image
            src="/photos/Menu.png"
            alt="search"
            height={20}
            width={20}
            className="h-[16] w-[16] md:hidden"
          />{" "}
        </button>
        <div
          className={`absolute z-50 top-10 right-0 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        >
          <ul className="p-4 space-y-2 font-satoshi text-gray-400 ">
            <Link href="/" passHref>
              <li className="active:bg-[rgb(42,37,75)] active:text-gray-200 rounded-sm">
                Home
              </li>{" "}
            </Link>
            <Link href="/about" passHref>
              <li className="active:active:bg-[rgb(42,37,75)] active:text-gray-200">
                About Us
              </li>{" "}
            </Link>
            <Link href="/product" passHref>
              <li className="active:active:bg-[rgb(42,37,75)] active:text-gray-200">
                Products
              </li>{" "}
            </Link>
            <Link href="/shopping" passHref>
              <li className="active:active:bg-[rgb(42,37,75)] active:text-gray-200">
                Shopping
              </li>{" "}
            </Link>
          </ul>
        </div>
      </div>

      <div className="relative flex">
        <div className="  hidden md:block absolute max-w-lg p-4 rounded-lg ml-2">
          <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Here"
              value={searchQuery}
              onChange={handleSearch}
              className=" py-2 px-4 text-sm placeholder-gray-500 focus:outline-none"
            />
            <CgSearch className=" hidden md:block md:h-6 md:w-6 md:ml-4 md:mr-4"></CgSearch>
          </div>

          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white w-[265] border border-gray-200 z-10">
              <ul className="bg-gray-100 ">
                {filteredProducts.map((product: Product) => (
                  <li key={product._id} className="font-satoshi">
                    <Link
                      href={`/product/${product._id}`}
                      className=" text-black hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link href="/" passHref>
          <h1 className="h-[30] w-[65] mt-5 ml-6 font-clash text-2xl md:ml-[687] md:mt-[20] cursor-pointer">
            Avion
          </h1>
        </Link>
        <div className=" flex mt-[26] ml-auto h-[16] gap-[20] md:absolute xl:ml-[1364] md:ml-[1200]">
          <Link href="./shopping" passHref>
            {" "}
            <CgShoppingCart className="  hidden md:block md:h-[16] md:w-[16]"></CgShoppingCart>{" "}
          </Link>
          <Link href="./about" passHref>
            {" "}
            <CgProfile className=" hidden md:block md:h-[16] md:w-[16] "></CgProfile>
          </Link>
        </div>
      </div>

      <Image
        src="/photos/Divider.png"
        alt="divider"
        height={100}
        width={100}
        className=" hidden md:block md:h-px md:w-[1386] md:mt-[70] md:ml-[28]"
      />

      <div className=" hidden md:block md:max-w-[675] md:max-h-[22] md:absolute md:ml-[382] md:mt-[20]">
        <ul className="flex gap-[44] font-satoshi text-gray-400">
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
