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
    <div className="w-[390px] md:w-[1170px] lg:w-[1280px] bg-[rgba(249,249,249,1)] xl:w-[1440px] md:mt-[132px]">
  <div className="absolute md:w-[1170px] lg:w-[1280px] xl:w-[1440px]">
    <h1 className="text-2xl ml-[24px] mt-[36px] md:ml-[188px] font-clash">
      Your shopping cart
    </h1>
    <div className="flex">
      <span className="hidden md:block xl:ml-[188px] md:ml-[188px] font-satoshi">
        Product
      </span>
      <span className="hidden md:block xl:ml-[650px] md:ml-[400px] font-satoshi">
        Quantity
      </span>
      <span className="hidden md:block xl:ml-[374px] md:ml-[400px] font-satoshi">
        Price
      </span>
    </div>
    <Image
      src="/photos/Divider.png"
      alt="div"
      height={100}
      width={100}
      className="hidden md:block h-px xl:w-[1172px] ml-[188px] md:w-[970px]"
    />
  </div>

  {cartItems.map((product: Product) => (
    <div className="flex gap-[22px]" key={product._id}>
      <Image
        src={product.imageUrl}
        alt={product.name}
        height={200}
        width={200}
        className="ml-[24px] mt-[110px] h-[166px] w-[133px] md:ml-[188px]"
      />
      <div className="w-[179px] h-[166px]">
        <h2 className="text-lg mt-[110px] font-clash">{product.name}</h2>
        <p className="mt-[15px] w-[150px] md:w-[300px] text-sm font-satoshi line-clamp-6">
          {product.description}
        </p>
        <div>
          <div>
            <span className="md:absolute mt-[0] md:block font-satoshi font-semibold md:ml-[980px] md:mt-[0]">
              £{product.price}
            </span>
          </div>
          <div className="flex mt-[16px] gap-[20px] ml-[20px] xl:ml-[550px] md:mt-[-95px] md:ml-[300px] w-[200px]">
            <button
              className="text-gray-200 bg-gray-400 hover:bg-gray-600 w-[25px] z-50"
              onClick={() => decrement(product._id)}
            >
              -
            </button>
            <span className="font-satoshi max-w-[8px] min-w-[8px]">
              {product.quantity}
            </span>
            <button
              className="text-gray-200 bg-gray-400 hover:bg-gray-600 w-[25px] z-50"
              onClick={() => increment(product._id)}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="ml-[-120px] absolute mt-[-40px] md:ml-[0] bg-red-700 hover:bg-red-600 hover:scale-110 duration-200 w-[100px] md:mt-[80px] text-white py-2 rounded"
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
    className="hidden md:block h-px xl:w-[1172px] ml-[188px] md:w-[970px] mt-[100px]"
  />

  <div className="ml-[84px] mt-[100px] md:ml-[800px] xl:ml-[1073px]">
    <div className="flex">
      <p className="font-clash ml-[132px] text-lg text-[rgba(78,77,147,1)]">
        Subtotal
      </p>
      <span className="font-clash text-lg ml-[45px]">
        Total: £{total().toFixed(2)}
      </span>
    </div>
    <p className="font-satoshi text-sm text-[rgba(78,77,147,1)]">
      Taxes and shipping are calculated at checkout
    </p>
    <br />
  </div>

  <button
    className="font-satoshi hover:bg-[rgb(65,57,116)] bg-[rgb(42,37,75)] w-[342px] h-[56px] ml-[24px] text-white md:ml-[900px] xl:ml-[1190px] md:h-[56px] md:w-[172px]"
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
