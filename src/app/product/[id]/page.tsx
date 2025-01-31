
import React from "react";
import { client } from "@/sanity/lib/client";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer-sm";
import Footer2 from "@/app/component/footer-all";
import Image from "next/image";
import ProductActions from "@/app/component/ProductActions";

interface ProductProps {
  params: Promise<{id:string}>;
}

async function getProduct(id:string): Promise<Product | null> {
  return client.fetch( `
    *[_type=="product" && _id == "${id}"][0]{
        _id,
        name,
        description,
        quantity,
        price,
        "imageUrl": image.asset->url,
    }
`, {id}
)
}

const ProductCategory = async ({params}:ProductProps) => {
  const {id} = await params

  const product = await getProduct(id)
 


  if (!product) {
    return <div>Product not found</div>;
  }

   
  return (
    <div className="">
      <Header />
      <div className="product-card cursor-pointer flex flex-col md:flex-row gap-5  max-w-[390]  ml-0 md:max-w-[950] mt-[50]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={550}
          className="rounded-md hover:opacity-95 md:w-[500] md:h-[500]  w-[390]  h-[390]"
        ></Image>

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
          <ProductActions product={product} />
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