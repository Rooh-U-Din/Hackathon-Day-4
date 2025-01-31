import Image from "next/image"
import Link from "next/link"


const Footer2 = () => {
    return (
        <div className=" hidden md:block md:w-[1170] lg:w-[1280] h-[380] max-w-[1440] xl:w-[1440]  bg-[rgb(42,37,75)]">
            <div className="absolute flex gap-[100] mt-[58] ml-[82]">

                <ul className="text-white font-sans space-y-3">
                    <li className="w-[84] h-[20] text-base font-clash">Manu</li>
                    <li className="text-sm">New arrivals</li>
                    <li className="text-sm font-satoshi">Best sellers</li>
                    <li className="text-sm font-satoshi">Recently viewed</li>
                    <li className="text-sm font-satoshi">Popular this week</li>
                    <li className="text-sm font-satoshi">All products</li>
                </ul>

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

                <ul className="text-white font-sans space-y-3 w-[105] h-[175]">
                    <li className="w-[105] h-[20] text-base font-clash">Our company</li>
                    <li className="text-sm font-satoshi">About us</li>
                    <li className="text-sm font-satoshi">Vacancies</li>
                    <li className="text-sm font-satoshi">Contact us</li>
                    <li className="text-sm font-satoshi">Privacy</li>
                    <li className="text-sm font-satoshi">Returns policy</li>
                </ul>
                </div>
<div>
                <span className="ml-[730] mt-[58] absolute text-white font-clash">Join our mailing list</span>
                <div className="absolute">
                <input type="email" placeholder="your@email.com" className="font-satoshi bg-[rgba(78,77,147,1)] placeholder:pl-7 h-[56]  md:ml-[580] md:mt-[180] md:w-[127] mt-[94] lg:w-[307] lg:ml-[630] xl:w-[527] xl:ml-[730]" />
                <button className=" font-satoshi lg:w-[118] lg:h-[56] md:w-[60] md:h-[56]  bg-white">Sign up</button>
                </div>
            </div>

            <div>
                <Image src="/photos/footerline.png" alt="" height={200} width={200} className="absolute xl:w-[1277] md:w-[700] h-px mt-[350] ml-[80]"></Image>
                <span className="font-satoshi text-white absolute mt-[355] ml-[80]">Copyright 2022 Avion LTD</span>
            </div>
            <div className="absolute flex gap-[24] mt-[355] xl:ml-[1093] md:ml-[500] ">
            <Image src="/photos/linkedin.png" alt="" height={200} width={200} className="w-[24] h-[24] "></Image>
            <Image src="/photos/facebook.png" alt="" height={200} width={200} className="w-[24] h-[24] "></Image>
            <Image src="/photos/instagram.png" alt="" height={200} width={200} className="w-[24] h-[24] "></Image>
            <Image src="/photos/skype.png" alt="" height={200} width={200} className="w-[24] h-[24] "></Image>
            <Image src="/photos/twitter.png" alt="" height={200} width={200} className="w-[24] h-[24] "></Image>
            <Image src="/photos/pinterest.png" alt="" height={200} width={200} className="w-[24] h-[24]"></Image>
            </div>
            <Link href="/FAQs" passHref className="absolute mt-[250]"><button className=" font-satoshi w-[342] h-[36] ml-[1210] text-black bg-gray-100 mt-[32] md:w-[170] hover:text-blue-700">FAQs</button></Link>
            </div>


        

    )
}
export default Footer2