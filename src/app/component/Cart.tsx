"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/action";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    if (confirm("Are you sure you want to remove this item?")) {
      removeFromCart(id);
      setCartItems(getCartItems()); // Update state after removal
      alert("Item removed");
    }
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const increment = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.quantity + 1);
  };

  const decrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1)
      handleQuantityChange(id, product.quantity - 1);
  };

  const total = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
const router = useRouter();
  const handleCheckout = () => {
    // Add your checkout logic here
    
    setCartItems([]);
    router.push("/checkout"); 
  };

  return (
    <div className="w-[390] md:w-[1170] lg:w-[1280] bg-[rgba(249,249,249,1)] xl:w-[1440] md:mt-[132] ">
      <div className="absolute md:w-[1170] lg:w-[1280] xl:w-[1440]">
        <h1 className="text-2xl ml-6 mt-9 md:ml-[188] font-clash">
          Your shopping cart
        </h1>
        <div className="flex">
          <span className="sm:hidden md:block xl:ml-[188] md:ml-[188] font-satoshi">
            Product
          </span>
          <span className="sm:hidden md:block xl:ml-[650] md:ml-[400] font-satoshi ">
            Quantity
          </span>
          <span className="sm:hidden md:block xl:ml-[374] md:ml-[400] font-satoshi ">
            Price
          </span>
        </div>
        <Image
          src="/photos/Divider.png"
          alt="div"
          height={100}
          width={100}
          className=" sm:hidden md:block h-px xl:w-[1172] ml-[188] md:w-[970]"
        ></Image>
      </div>
      {cartItems.map((product: Product) => (
        <div className=" flex gap-[22]" key={product._id}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            height={200}
            width={200}
            className="ml-[24] mt-[110] h-[166] w-[133] md:ml-[188]"
          />
          <div className="w-[179] h-[166]">
            <h2 className="text-lg mt-[110] font-clash ">{product.name}</h2>
            <p className="mt-[15] sm:w-150  md:w-[300]  text-sm font-satoshi">
              {product.description}
            </p>
            <div>
              <div>
                <span className="md:absolute mt-[0] md:block font-satoshi font-semibold md:ml-[980] md:mt-[0] ">
                  £{product.price}
                </span>
              </div>
              <div className="flex mt-[16] gap-[20] ml-[20] xl:ml-[550] md:mt-[-95] md:ml-[300] w-[200]">
                <button
                  className="text-gray-200 bg-gray-400 hover:bg-gray-600 w-[25] z-50"
                  onClick={() => decrement(product._id)}
                >
                  -
                </button>
                <span className="font-satoshi max-w-[8] min-w-[8]">
                  {product.quantity}
                </span>
                <button
                  className="text-gray-200 bg-gray-400 hover:bg-gray-600 w-[25] z-50"
                  onClick={() => increment(product._id)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="sm:ml-[-120] sm:absolute sm:mt-[-70]  md:ml-[0] bg-red-700 hover:bg-red-600 hover:scale-110 duration-200 w-[100] md:mt-[80] text-white py-2 rounded"
              onClick={() => handleRemove(product._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <br />
      <Image
        src="/photos/Divider.png"
        alt="div"
        height={100}
        width={100}
        className=" sm:hidden md:block h-px xl:w-[1172] ml-[188] md:w-[970] mt-[100]"
      ></Image>

      <div className="ml-[84] mt-[100] md:ml-[800] xl:ml-[1073]">
        <div className="flex ">
          <p className="font-clash ml-[132] text-lg text-[rgba(78,77,147,1)]">
            Subtotal
          </p>
          <span className="font-clash text-lg ml-[45]">
            Total: £{total().toFixed(2)}
          </span>
        </div>
        <p className="font-satoshi text-sm text-[rgba(78,77,147,1)]">
          Taxes and shipping are calculated at checkout
        </p>
        <br />
      </div>
      <button
        className="font-satoshi hover:bg-[rgb(65,57,116)] bg-[rgb(42,37,75)] w-[342] h-[56]  ml-[24] text-white md:ml-[900] xl:ml-[1190] md:h-[56] md:w-[172]"
        onClick={handleCheckout}
      >
        Go to checkout
      </button>

      <br />
      <br />
    </div>
  );
};
export default Cart;
