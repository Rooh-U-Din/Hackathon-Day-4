"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addToCart } from "../actions/action";
import { CgChevronDown } from "react-icons/cg";

const ProductCom1 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFiltersDropdownVisible, setIsFiltersDropdownVisible] = useState(false);
  const [isFiltersDropdownVisible2, setIsFiltersDropdownVisible2] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type=="product"]{
          _id,
          name,
          description,
          quantity,
          price,
          "imageUrl": image.asset->url,
        }
      `;
      try {
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    console.log(product);
  };

  // Toggle Filters dropdown visibility
  const toggleFiltersDropdown = () => {
    setIsFiltersDropdownVisible(!isFiltersDropdownVisible);
  };
  const toggleFiltersDropdown2 = () => {
    setIsFiltersDropdownVisible2(!isFiltersDropdownVisible2);
  };
  return (
    <div className="max-w-[390px] md:max-w-[1440px]">
      <div>
        <Image
          src="/photos/Framesm.png"
          alt=""
          height={400}
          width={400}
          className="md:hidden h-[146px] w-[390px] mt-[9px]"
        />
        <Image
          src="/photos/Frame.png"
          alt=""
          height={400}
          width={400}
          className=" hidden md:block md:h-[209px] md:w-[1440px] mt-[69px]"
        />
      </div>

      {/* Filters Button with Dropdown */}
      <div className="flex mt-[94px] ml-[24px] gap-[20px] md:hidden relative">
        <button
          className="w-[163px] h-[56px] font-satoshi text-black bg-gray-50 flex items-center justify-center"
          onClick={toggleFiltersDropdown}
        >
          Filters
          <Image
            src="/photos/down.png"
            alt="Dropdown icon"
            height={16}
            width={16}
            className="absolute h-[16px] w-[16px] ml-[108.5px]"/>
        </button>

        {/* Filters Dropdown Menu */}
        {isFiltersDropdownVisible && (
          <ul className="absolute bg-white shadow-lg rounded-md mt-[60px] p-4 space-y-2 z-10">
            <li>
              <Link href="/plant-pots" className="hover:text-blue-600">
                Plant pots
              </Link>
            </li>
            <li>
              <Link href="/ceramics" className="hover:text-blue-600">
                Ceramics
              </Link>
            </li>
            <li>
              <Link href="/tables" className="hover:text-blue-600">
                Tables
              </Link>
            </li>
            <li>
              <Link href="/chairs" className="hover:text-blue-600">
                Chairs
              </Link>
            </li>
            <li>
              <Link href="/crockery" className="hover:text-blue-600">
                Crockery
              </Link>
            </li>
            <li>
              <Link href="/tableware" className="hover:text-blue-600">
                Tableware
              </Link>
            </li>
            <li>
              <Link href="/cutlery" className="hover:text-blue-600">
                Cutlery
              </Link>
            </li>
          </ul>
        )}

<button
          className="w-[163px] h-[56px] font-satoshi text-black bg-gray-50 flex items-center justify-center"
          onClick={toggleFiltersDropdown2}
        >
          Sorting
          <Image
            src="/photos/down.png"
            alt="Dropdown icon"
            height={16}
            width={16}
            className="absolute h-[16px] w-[16px] ml-[108.5px]"/>
        </button>

        {/* Filters Dropdown Menu */}
        {isFiltersDropdownVisible2 && (
          <ul className="absolute ml-[200] bg-white shadow-lg rounded-md mt-[60px] p-4 space-y-2 z-10">
            <li>
              <Link href="/plant-pots" className="hover:text-blue-600">
                Plant pots
              </Link>
            </li>
            <li>
              <Link href="/ceramics" className="hover:text-blue-600">
                Ceramics
              </Link>
            </li>
            <li>
              <Link href="/tables" className="hover:text-blue-600">
                Tables
              </Link>
            </li>
            <li>
              <Link href="/chairs" className="hover:text-blue-600">
                Chairs
              </Link>
            </li>
            <li>
              <Link href="/crockery" className="hover:text-blue-600">
                Crockery
              </Link>
            </li>
            <li>
              <Link href="/tableware" className="hover:text-blue-600">
                Tableware
              </Link>
            </li>
            <li>
              <Link href="/cutlery" className="hover:text-blue-600">
                Cutlery
              </Link>
            </li>
          </ul>
        )}
        
      </div>

      <br />

      {/* Desktop Filters */}
      <div className=" hidden md:block md:max-h-[64px] md:w-[1440px] ml-[24px]">
        <div className="flex font-satoshi gap-[12px] mt-[8px] text-[rgb(42,37,75)]">
          <div>
            Category{" "}
            <CgChevronDown className="h-[16px] w-[16px] ml-[88.5px] mt-[-18px]" />
          </div>
          <div>
            Product type{" "}
            <CgChevronDown className="h-[16px] w-[16px] ml-[88.5px] mt-[-18px]" />
          </div>
          <div>
            Price{" "}
            <CgChevronDown className="h-[16px] w-[16px] ml-[88.5px] mt-[-18px]" />
          </div>
          <div>
            Brand{" "}
            <CgChevronDown className="h-[16px] w-[16px] ml-[88.5px] mt-[-18px]" />
          </div>
        </div>
        <div className="flex gap-[16px] md:ml-[679px] xl:w-[237px] xl:h-[48px] xl:mt-[-26px] xl:ml-[1179px] text-[rgb(42,37,75)]">
          <div className="font-satoshi">Sorting by:</div>
          <div className="font-satoshi">
            Date added{" "}
            <CgChevronDown className="h-[16px] w-[16px] ml-[88.5px] mt-[-18px]" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className=" grid  grid-cols-2 ml-[24px] md:grid md:grid-cols-4 md:gap-[20px] md:ml-[80px]">
        {products.map((product: Product) => (
          <div
            key={product._id}
            className="product-card-container bg-gray-50 p-4 rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <Link href={`/product/${product._id}`}>
              <div className="product-card cursor-pointer">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  height={400}
                  width={400}
                  className="w-[163px] h-[201px] md:h-[375px] md:w-[305px] hover:opacity-90 rounded"
                />
                <h2 className="product-name text-xl font-clash">
                  {product.name}
                </h2>
                <p className="product-price font-satoshi">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
            <div className=" grid  grid-cols-1  gap-2 md:flex md:justify-between md:items-center bg-gray-50 max-w-[325px] mt-2 p-2 rounded-sm">
              <button
                className=" w-[100px] bg-blue-700 h-8 rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi cursor-pointer"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to cart
              </button>

              <Link href="/shopping" passHref>
                <button className=" w-[100px] bg-blue-700 h-8 rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi">
                  Go to cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <button className="font-satoshi w-[342px] h-[56px] ml-[24px] text-black bg-gray-100 mt-[32px] md:w-[170px] md:ml-[635px]">
        View collection
      </button>
    </div>
  );
};

export default ProductCom1;