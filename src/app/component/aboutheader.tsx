"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const AboutH = () => {

    const [isOpen, setIsOpen] = useState(false)
    
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

    return (
        <div className="w-[390px] h-[54px] md:w-[1440px] bg-[rgb(42,37,75)]">
  {/* Font imports */}
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap"
  />

  {/* Mobile menu toggle */}
  <div className="flex mt-[70px] h-[16px] gap-[20px] absolute ml-[350px] md:hidden">
    <button onClick={toggleMenu} className="z-20">
      <Image
        src="/photos/Menu.png"
        alt="menu"
        height={20}
        width={20}
        className="h-[16px] w-[16px]"
      />
    </button>
    {/* Mobile menu dropdown */}
    <div
      className={`absolute z-50 top-10 right-0 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } md:hidden`}
    >
      <ul className="p-4 space-y-2 font-satoshi text-gray-400">
        <Link href="/" passHref>
          <li>Home</li>
        </Link>
        <Link href="/about" passHref>
          <li>About Us</li>
        </Link>
        <Link href="/product" passHref>
          <li>Products</li>
        </Link>
        <Link href="/shopping" passHref>
          <li>Shopping</li>
        </Link>
      </ul>
    </div>
  </div>

  {/* Free delivery banner */}
  <div className="flex">
    <Image
      src="/photos/Deliveri.png"
      alt="delivery"
      height={100}
      width={100}
      className="h-[16px] w-[16px] mt-[11px] md:ml-[516px]"
    />
    <p className="font-satoshi text-xs mt-[11px] ml-[24px] text-white">
      Free delivery on all orders over £50 with code <br className="md:hidden" />
      easter checkout
    </p>
    <Link href="/" passHref>
      <Image
        src="/photos/Close.png"
        alt="close"
        height={100}
        width={100}
        className="absolute h-[16px] w-[16px] mt-[15px] ml-[80px] md:ml-[500px] md:h-[24px] md:w-[24px]"
      />
    </Link>
  </div>

  {/* Logo */}
  <div className="h-[124px] flex">
    <h1 className="ml-[24px] mt-[20px] font-clash text-2xl md:absolute md:ml-[28px] md:mt-[62px]">
      Avion
    </h1>
  </div>

  {/* Desktop navigation links */}
  <div className="hidden md:block absolute ml-[1047px] mt-[-60px]">
    <ul className="font-satoshi flex gap-[32px] text-gray-300">
      <li>About us</li>
      <li>Contact</li>
      <li>Blog</li>
    </ul>
  </div>

  {/* Desktop icons */}
  <div className="hidden md:flex ml-[1309px] mt-[-60px] gap-[16px]">
    <Image
      src="/photos/Search.png"
      alt="search"
      height={100}
      width={100}
      className="h-[16px] w-[16px]"
    />
    <Image
      src="/photos/cart.png"
      alt="cart"
      height={100}
      width={100}
      className="h-[16px] w-[16px]"
    />
    <Image
      src="/photos/User--avatar.png"
      alt="profile"
      height={100}
      width={100}
      className="h-[16px] w-[16px]"
    />
  </div>

  {/* Category navigation */}
  <div className="h-[54px] bg-gray-100 py-4 pl-6 mt-[-50px] w-[390px] overflow-hidden md:block md:w-[1440px] md:mt-[50px]">
    <ul className="flex font-satoshi gap-[44px] text-gray-500 md:ml-[318px] w-[390px] md:w-[1000] whitespace-nowrap overflow-x-auto">
      <Link href="/" passHref>
        <li>All products</li>
      </Link>
      <li>Plant pots</li>
      <li>Ceramics</li>
      <li>Tables</li>
      <li>Chairs</li>
      <li>Crockery</li>
      <li>Tableware</li>
      <li>Cutlery</li>
    </ul>
  </div>
</div>
    )
}
export default AboutH