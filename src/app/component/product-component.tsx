"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


type Product={
  _id: string;
  name:string;
  imageUrl:string;
  price:number;
  description:string;

};

const ProductCom1 = () => {

  const [products,setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    const fetchProducts = async ()=>{

      const query = `
        *[_type=="product"]{
        _id,
            name,
            price,
            "imageUrl": image.asset->url,
    }
    `;
    const fetchedProducts = await client.fetch(query);
    setProducts(fetchedProducts);
    };
    fetchProducts();
  })



  return (

    <div className="max-w-[390] md:max-w-[1440]">
        <div>
                <Image src="/photos/Framesm.png" alt="" height={400} width={400} className="md:hidden h-[146] w-[390] mt-[9]"></Image>
                <Image src="/photos/Frame.png" alt="" height={400} width={400} className="sm:hidden md:block md:h-[209] md:w-[1440] mt-[69]"></Image>
            </div>
            <div className="flex mt-[94] ml-[24] gap-[20] md:hidden">
                <button className="w-[163] h-[56] font-satoshi text-black bg-gray-50">Filters <img src="/photos/down.png" className="absolute h-[16] w-[16] ml-[108.5] mt-[-18]"></img></button>
                <button className="w-[163] h-[56] font-satoshi text-black bg-gray-50">Sorting <img src="/photos/down.png" className="absolute h-[16] w-[16] ml-[108.5] mt-[-18]"></img></button>
            </div>
            <div className="sm:hidden md:block md:max-h-[64] md:w-[1440] ml-[24]">
                <div className="flex font-satoshi gap-[12] mt-[8] text-[rgb(42,37,75)]">
                    <div>Category <img src="/photos/downb.png" className=" h-[16] w-[16] ml-[88.5] mt-[-18]"></img></div>
                    <div>Product type <img src="/photos/downb.png" className=" h-[16] w-[16] ml-[108.5] mt-[-18]"></img></div>
                    <div>Price <img src="/photos/downb.png" className="h-[16] w-[16] ml-[68.5] mt-[-18]"></img></div>
                    <div>Brand <img src="/photos/downb.png" className="h-[16] w-[16] ml-[88.5] mt-[-18]"></img></div>
                </div>
                <div className="flex gap-[16] md:ml-[679] xl:w-[237] xl:h-[48] xl:mt-[-26] xl:ml-[1179]  text-[rgb(42,37,75)]">
                    <div className="font-satoshi">Sorting by:</div>
                    <div className="font-satoshi">Date added <img src="/photos/downb.png" className="h-[16] w-[16] ml-[88.5] mt-[-18]"></img></div>
                </div>

            </div>
        <br />
         <div className="sm:grid sm:grid-cols-2 ml-[24] md:grid md:grid-cols-4 md:gap-[20] md:ml-[80]">
         {products.map((product:Product) => (
  <Link href={`/product/${product._id}`} key={product._id}>
    <div className="product-card cursor-pointer">
      <Image 
        src={product.imageUrl} 
        alt="img" 
        height={400} 
        width={400} 
        className="w-[163] h-[201] md:h-[375] md:w-[305]" 
      />
      <h2 className="product-name text-xl font-clash">{product.name}</h2>
      <p className="product-price font-satoshi">${product.price.toFixed(2)}</p>
    </div>
  </Link>
))}
    </div>
    <button className="font-satoshi w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:ml-[635]">View collection</button>
      </div>
      
    
  );
};
export default ProductCom1;
