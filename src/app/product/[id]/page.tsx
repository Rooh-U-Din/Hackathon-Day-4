import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer-sm";
import Footer2 from "@/app/component/footer-all";

const ProductCategory = async ({ params }: { params: { id: string } }) => {
  const query = `
    *[_type=="product" && _id == "${params.id}"][0]{
        _id,
        name,
        description,
        quantity,
        price,
        "imageUrl": image.asset->url,
    }
`;

  const product: Product = await client.fetch(query);


  if (!product) {
    return <div>Product not found</div>;
  }

 
  return (
    <div className="">
      <Header />
      <div className="product-card cursor-pointer flex flex-col md:flex-row gap-5 sm:max-w-[390] sm:ml-0 md:max-w-[950] mt-[50]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-[500] w-[550]"
        ></img>

        <div className="mt-8">
          <h2 className="product-name font-bold text-xl font-clash">
            {product.name}
          </h2>
          <br />
          <br />
          <p className="text-xl font-satoshi text-gray-700">
            {product.description}
          </p>
          <br />
          <br />
          <p className="product-price font-semibold font-satoshi">
            ${product.price.toFixed(2)}
          </p>
          <br />
     
        
          <br />
          <br />
          <button
            className="bg-blue-700 h-8 w-[270px] rounded text-white hover:bg-blue-800 flex items-center justify-center font-satoshi"
          >
            <Link href="/shopping">Go to cart</Link>
          </button>
        </div>
      </div>
      <br />
      <br />
      <Footer />
      <Footer2 />

    </div>
  );
};

export default ProductCategory;
