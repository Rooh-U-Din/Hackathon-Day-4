"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=" flex mt-[26] h-[16] gap-[20] absolute ml-[318] md:block">
            <Image src="/photos/Search.png" alt="search" height={20} width={20} className=" h-[16] w-[16] md:hidden" />
            <button onClick={toggleMenu} className="z-20 md:hidden"><Image src="/photos/Menu.png" alt="search" height={20} width={20} className="h-[16] w-[16] md:hidden" /> </button>
            <div
                className={`absolute z-50 top-10 right-0 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } md:hidden`}
            >
                <ul className="p-4 space-y-2 font-satoshi text-gray-400 ">
                    <Link href="/" passHref><li className='active:bg-[rgb(42,37,75)] active:text-gray-200 rounded-sm'>Home</li> </Link>
                    <Link href="/about" passHref><li className='active:active:bg-[rgb(42,37,75)] active:text-gray-200'>About Us</li> </Link>
                    <Link href="/product" passHref><li className='active:active:bg-[rgb(42,37,75)] active:text-gray-200'>Products</li> </Link>
                    <Link href="/shopping" passHref><li className='active:active:bg-[rgb(42,37,75)] active:text-gray-200'>Shopping</li> </Link>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu
