"use client";

import React from "react";
import { addToCart } from "@/app/actions/action";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  category: string;
}

const ProductActions: React.FC<{ product: Product }> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    console.log("Added to cart:", product);
  };

  return (
    <div className="flex md:block justify-between items-center mt-6">
  {/* Add to Cart Button */}
  <button
    className="w-[150px] md:w-[300px] bg-blue-700 h-8 rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi"
    onClick={handleAddToCart}
  >
    Add to cart
  </button>
  <br />

  {/* Go to Cart Button */}
  <Link href="/shopping" passHref>
    <button className="w-[150px] md:w-[300px] bg-blue-700 h-8 rounded text-white hover:bg-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out font-satoshi">
      Go to cart
    </button>
  </Link>
</div>
  );
};

export default ProductActions;
