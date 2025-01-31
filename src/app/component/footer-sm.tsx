import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="md:hidden w-[390px] h-[668px] bg-[rgb(42,37,75)] mt-[-55px]">
  <div className="ml-[25px] mt-[40px] flex gap-[100px]">
    <ul className="text-white font-sans space-y-3">
      <li className="w-[84px] h-[20px] text-base font-clash">Categories</li>
      <li className="text-sm font-satoshi">Plant pots</li>
      <li className="text-sm font-satoshi">Ceramics</li>
      <li className="text-sm font-satoshi">Tables</li>
      <li className="text-sm font-satoshi">Chairs</li>
      <li className="text-sm font-satoshi">Crockery</li>
      <li className="text-sm font-satoshi">Tableware</li>
      <li className="text-sm font-satoshi">Cutlery</li>
    </ul>

    <ul className="text-white space-y-3">
      <li className="w-[84px] h-[20px] text-base font-clash">Menu</li>
      <li className="text-sm font-satoshi">New arrivals</li>
      <li className="text-sm font-satoshi">Best sellers</li>
      <li className="text-sm font-satoshi">Recently viewed</li>
      <li className="text-sm font-satoshi">Popular this week</li>
      <li className="text-sm font-satoshi">All products</li>
    </ul>
  </div>

  <div className="ml-[25px] mt-[40px] w-[105px] h-[175px]">
    <ul className="text-white font-sans space-y-3 w-[105px] h-[175px]">
      <li className="w-[105px] h-[20px] text-base font-clash">Our company</li>
      <li className="text-sm font-satoshi">About us</li>
      <li className="text-sm font-satoshi">Vacancies</li>
      <li className="text-sm font-satoshi">Contact us</li>
      <li className="text-sm font-satoshi">Privacy</li>
      <li className="text-sm font-satoshi">Returns policy</li>
    </ul>

    <span className="text-white absolute mt-[45px]">Join our mailing list</span>
    <div className="flex w-[342px] h-[56px] mt-[70px]">
      <input
        type="email"
        placeholder="your@email.com"
        className="bg-[rgba(78,77,147,1)] placeholder:text-center placeholder:font-satoshi w-full"
      />
      <button className="bg-white w-[118px] font-satoshi">Sign up</button>
    </div>
  </div>

  <Image
    src="/photos/Line 12.png"
    alt="Line"
    height={20}
    width={20}
    className="absolute w-[314px] h-px ml-[25px] mt-[135px]"
  />

  <span className="absolute text-white text-sm ml-[113px] mt-[140px] font-clash">
    Copyright 2022 Avion LTD
  </span>

  <Link href="/FAQs" passHref>
    <button className="font-satoshi w-[152px] h-[36px] ml-[200px] text-black bg-gray-100 mt-[32px] hover:text-blue-700">
      FAQs
    </button>
  </Link>
</div>
    )
}

export default Footer