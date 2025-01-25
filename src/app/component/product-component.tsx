"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { addToCart } from "../actions/action";

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
      <div className="sm:grid sm:grid-cols-2 ml-[24] md:grid md:grid-cols-4 md:gap-[20] md:ml-[80]">
        {products.map((product: Product) => (
          <div key={product._id}>
            <Link href={`/product/${product._id}`} passHref>
              <div className="product-card cursor-pointer">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  height={400}
                  width={400}
                  className="w-[163] h-[201] md:h-[375] md:w-[305]"
                />
                <h2 className="product-name text-xl font-clash">
                  {product.name}
                </h2>
                <p className="product-price font-satoshi">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
            <div className="flex justify-between items-center max-w-[300] mt-2">
              <button
                className="sm:w-[100] bg-blue-700 h-8 w-[310px] rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to cart
              </button>
              <Link href="/shopping" passHref>
                <>
                  <button className="sm:w-[100] bg-blue-700 h-8 w-[310px] rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi">
                    Go to cart
                  </button>
                </>
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
