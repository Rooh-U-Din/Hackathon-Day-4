"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addToCart } from "../actions/action";
import { CgChevronDown,} from "react-icons/cg";

const ProductCom1 = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

  

  return (
    <div className="max-w-[390] md:max-w-[1440]">
      <div>
        <Image
          src="/photos/Framesm.png"
          alt=""
          height={400}
          width={400}
          className="md:hidden h-[146] w-[390] mt-[9]"
        />
        <Image
          src="/photos/Frame.png"
          alt=""
          height={400}
          width={400}
          className="sm:hidden md:block md:h-[209] md:w-[1440] mt-[69]"
        />
      </div>
      <div className="flex mt-[94] ml-[24] gap-[20] md:hidden">
        <button className="w-[163] h-[56] font-satoshi text-black bg-gray-50">
          Filters
          <Image
            src="/photos/down.png"
            alt="Dropdown icon"
            height={16}
            width={16}
            className="absolute h-[16] w-[16] ml-[108.5] mt-[-18]"
          />
        </button>
        <button className="w-[163] h-[56] font-satoshi text-black bg-gray-50">
          Sorting
          <Image
            src="/photos/down.png"
            alt="Dropdown icon"
            height={16}
            width={16}
            className="absolute h-[16] w-[16] ml-[108.5] mt-[-18]"
          />
        </button>
      </div>
      <div className="sm:hidden md:block md:max-h-[64] md:w-[1440] ml-[24]">
        <div className="flex font-satoshi gap-[12] mt-[8] text-[rgb(42,37,75)]">
          <div>
            Category{" "}
           
            <CgChevronDown
              className=" h-[16] w-[16] ml-[88.5] mt-[-18]"></CgChevronDown>
          </div>
          <div>
            Product type{" "}
            
            <CgChevronDown
              className=" h-[16] w-[16] ml-[88.5] mt-[-18]"></CgChevronDown>
          </div>
          <div>
            Price{" "}
            <CgChevronDown
              className=" h-[16] w-[16] ml-[88.5] mt-[-18]"></CgChevronDown>
          </div>
          <div>
            Brand{" "}
            
            <CgChevronDown
              className=" h-[16] w-[16] ml-[88.5] mt-[-18]"></CgChevronDown>
          </div>
        </div>
        <div className="flex gap-[16] md:ml-[679] xl:w-[237] xl:h-[48] xl:mt-[-26] xl:ml-[1179]  text-[rgb(42,37,75)]">
          <div className="font-satoshi">Sorting by:</div>
          <div className="font-satoshi">
            Date added{" "}
            
            <CgChevronDown
              className=" h-[16] w-[16] ml-[88.5] mt-[-18]"></CgChevronDown>
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 ml-[24] md:grid md:grid-cols-4 md:gap-[20] md:ml-[80]">
        {products.map((product: Product) => (
          <div key={product._id} className="product-card-container bg-gray-50 p-4 rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <Link href={`/product/${product._id}`}>
              <div className="product-card cursor-pointer ">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  height={400}
                  width={400}
                  className="w-[163] h-[201] md:h-[375] md:w-[305] hover:opacity-90 rounded"
                />
                <h2 className="product-name text-xl font-clash">
                  {product.name}
                </h2>
                <p className="product-price font-satoshi">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
            <div className="sm:grid sm:grid-cols-1 sm:gap-2 md:flex md:justify-between md:items-center bg-gray-50 max-w-[325] mt-2  p-2 rounded-sm">
              <button
                className="sm:w-[100] bg-blue-700 h-8 w-[310px]  rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi cursor-pointer"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to cart
              </button>
             
              <Link href="/shopping" passHref>
                
                  <button className="sm:w-[100] bg-blue-700 h-8 w-[310px] rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi">
                    Go to cart
                  </button>
                
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="font-satoshi w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:ml-[635]">
        View collection
      </button>
    </div>
  );
};

export default ProductCom1;
