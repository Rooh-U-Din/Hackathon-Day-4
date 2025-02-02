import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Header from '../component/header';
import Footer from '../component/footer-sm';
import Footer2 from '../component/footer-all';

// Function to normalize category names (handles spaces and casing)
function formatCategory(category: string): string {
  return category.replace(/-/g, " ").toLowerCase(); // Converts "plant-pots" → "plant pots"
}

async function getData(category: string) {
  const formattedCategory = formatCategory(category);

  const query = `*[_type == "product" && lower(category->name) == $category] {
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    category-> { name }
  }`;

  try {
    const data = await client.fetch(query, { category: formattedCategory });
    console.log(`Querying products for "${formattedCategory}":`, data); // Debugging log
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const Category = async ({ params }: { params: { category: string } }) => {
  console.log("Received category param:", params.category); // Debugging log

  const category = params.category;

  const data = await getData(category);
 


  if (!category) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header/>
      <br /><br />
    <div className=" grid grid-cols-2 ml-[24px] md:grid md:grid-cols-4 md:gap-[20px] md:ml-[80px]">
      {data.map((product: Product) => (
        <div
          key={product._id}
          className="product-card-container bg-gray-50 p-4 rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <Link href={`/product/${product._id}`}>
            <div className="product-card cursor-pointer">
              <Image
                src={product.imageUrl}
                alt={product.name || "Product image"}
                height={400}
                width={400}
                className="w-[163px] h-[201px] md:h-[375px] md:w-[305px] hover:opacity-90 rounded"
              />
              <h2 className="product-name text-xl font-clash">
                {product.name}
              </h2>
              <p className="product-price font-satoshi">
                ${product.price ? product.price.toFixed(2) : "N/A"}
              </p>
            </div>
          </Link>
         
        </div>
      ))}
      
    </div>
    <Footer/>
    <Footer2/>
    </div>
  );
};

export default Category;
