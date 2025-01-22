"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isManuOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilterdProducts] = useState<any[]>([]);

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
  };

  return (
    <div className=" w-[390] h-[69] md:block md:w-[1440] md:h-[132]">
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap"
      />
      <div className="relative flex">
      <div className="absolute max-w-lg p-4 rounded-lg ml-2">
        <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Here"
            value={searchQuery}
            onChange={handleSearch}
            className=" py-2 px-4 text-sm placeholder-gray-500 focus:outline-none"
          />
          <Image
            src="/photos/Search.png"
            alt="search"
            height={200}
            width={200}
            className="sm:hidden md:block md:h-6 md:w-6 md:ml-4 md:mr-4"
          />
        </div>

        {searchQuery && filteredProducts.length > 0 && (
          <div className="absolute bg-white w-[265] border border-gray-200 z-10">
            <ul className="bg-gray-100 ">
              {filteredProducts.map((product: any) => (
                <li key={product._id} className="font-satoshi">
                  <Link href={`/product/${product._id}`} className=" text-black hover:text-blue-600">{product.name}</Link>
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
            <Image
              src="/photos/Shopping--cart.png"
              alt="cart"
              height={20}
              width={20}
              className=" sm:hidden md:block md:h-[16] md:w-[16]"
            />{" "}
          </Link>
          <Link href="./about" passHref>
            {" "}
            <Image
              src="/photos/User--avatar.png"
              alt="cart"
              height={20}
              width={20}
              className="sm:hidden md:block md:h-[16] md:w-[16] "
            />
          </Link>
        </div>
        
      </div>
          
      <Image
        src="/photos/Divider.png"
        alt="divider"
        height={100}
        width={100}
        className="sm:hidden md:block md:h-px md:w-[1386] md:mt-[70] md:ml-[28]"
      />

      <div className="sm:hidden md:block md:max-w-[675] md:max-h-[22] md:absolute md:ml-[382] md:mt-[20]">
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
