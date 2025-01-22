import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="md:hidden w-[390] h-[668] bg-[rgb(42,37,75)] mt-[-55]">

            <div className="ml-[25] mt-[40] flex gap-[100]">
                <ul className="text-white font-sans space-y-3">
                    <li className="w-[84] h-[20] text-base font-clash">Categories</li>
                    <li className="text-sm font-satoshi">Plant pots</li>
                    <li className="text-sm font-satoshi">Ceramics</li>
                    <li className="text-sm font-satoshi">Tables</li>
                    <li className="text-sm font-satoshi">Chairs</li>
                    <li className="text-sm font-satoshi">Crockery</li>
                    <li className="text-sm font-satoshi">Tableware</li>
                    <li className="text-sm font-satoshi">Cutlery</li>
                </ul>

                <ul className="text-white space-y-3">
                    <li className="w-[84] h-[20] text-base font-clash">Manu</li>
                    <li className="text-sm font-satoshi">New arrivals</li>
                    <li className="text-sm font-satoshi">Best sellers</li>
                    <li className="text-sm font-satoshi">Recently viewed</li>
                    <li className="text-sm font-satoshi">Popular this week</li>
                    <li className="text-sm font-satoshi">All products</li>
                </ul>
            </div>
            <div className="ml-[25] mt-[40] w-[105] h-[175]">
                <ul className="text-white font-sans space-y-3 w-[105] h-[175]">
                    <li className="w-[105] h-[20] text-base font-clash">Our company</li>
                    <li className="text-sm font-satoshi">About us</li>
                    <li className="text-sm font-satoshi">Vacancies</li>
                    <li className="text-sm font-satoshi">Contact us</li>
                    <li className="text-sm font-satoshi">Privacy</li>
                    <li className="text-sm font-satoshi">Returns policy</li>
                </ul>
                <span className="text-white absolute mt-[45]">Join our mailing list</span>
                <div className="flex w-[342] h-[56] mt-[70]">
                    <input type="email" placeholder="your@email.com" className="  bg-[rgba(78,77,147,1)] placeholder:text-center placeholder:font-satoshi" />
                    <button className="bg-white w-[118] font-satoshi">Sign up</button>
                </div>
            </div>
            <Image src="/photos/Line 12.png" alt="Line" height={20} width={20} className=" absolute w-[314] h-px ml-6 mt-[135] " />
            <span className="absolute text-white text-sm ml-[113] mt-[140] font-clash">Copyright 2022 Avion LTD</span>
            <Link href="/FAQs" passHref className="absolute mt-[-50]"><button className=" font-satoshi w-[152] h-[36] ml-[200] text-black bg-gray-100 mt-[32] md:w-[170] hover:text-blue-700">FAQs</button></Link>
           
        </div>
    )
}

export default Footer