import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
  return (
    <div className="hidden md:block md:w-[1170px] lg:w-[1280px] h-[380px] max-w-[1440px] xl:w-[1440px] bg-[rgb(42,37,75)]">
      <div className="absolute flex gap-[100px] mt-[58px] ml-[82px]">
        <ul className="text-white font-sans space-y-3">
          <li className="w-[84px] h-[20px] text-base font-clash">Menu</li>
          <li className="text-sm">New arrivals</li>
          <li className="text-sm font-satoshi">Best sellers</li>
          <li className="text-sm font-satoshi">Recently viewed</li>
          <li className="text-sm font-satoshi">Popular this week</li>
          <li className="text-sm font-satoshi">All products</li>
        </ul>

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

        <ul className="text-white font-sans space-y-3 w-[105px] h-[175px]">
          <li className="w-[105px] h-[20px] text-base font-clash">Our company</li>
          <li className="text-sm font-satoshi">About us</li>
          <li className="text-sm font-satoshi">Vacancies</li>
          <li className="text-sm font-satoshi">Contact us</li>
          <li className="text-sm font-satoshi">Privacy</li>
          <li className="text-sm font-satoshi">Returns policy</li>
        </ul>
      </div>

      <div>
        <span className="ml-[730px] mt-[58px] absolute text-white font-clash">
          Join our mailing list
        </span>
        <div className="absolute">
          <input
            type="email"
            placeholder="your@email.com"
            className="font-satoshi bg-[rgba(78,77,147,1)] placeholder:pl-7 h-[56px] md:ml-[580px] md:mt-[180px] md:w-[127px] lg:w-[307px] lg:ml-[630px] xl:w-[527px] xl:ml-[730px]"
          />
          <button className="font-satoshi lg:w-[118px] lg:h-[56px] md:w-[60px] md:h-[56px] bg-white">
            Sign up
          </button>
        </div>
      </div>

      <div>
        <Image
          src="/photos/footerline.png"
          alt=""
          height={200}
          width={200}
          className="absolute xl:w-[1277px] md:w-[700px] h-px mt-[350px] ml-[80px]"
        />
        <span className="font-satoshi text-white absolute mt-[355px] ml-[80px]">
          Copyright 2022 Avion LTD
        </span>
      </div>

      <div className="absolute flex gap-[24px] mt-[355px] xl:ml-[1093px] md:ml-[500px]">
        <Image
          src="/photos/linkedin.png"
          alt="LinkedIn"
          height={24}
          width={24}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/photos/facebook.png"
          alt="Facebook"
          height={24}
          width={24}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/photos/instagram.png"
          alt="Instagram"
          height={24}
          width={24}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/photos/skype.png"
          alt="Skype"
          height={24}
          width={24}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/photos/twitter.png"
          alt="Twitter"
          height={24}
          width={24}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/photos/pinterest.png"
          alt="Pinterest"
          height={24}
          width={24}
          className="w-[24px] h-[24px]"
        />
      <Link href="/FAQs" passHref>
    <button className="absolute font-satoshi z-10 w-[152px] h-[36px] right-0 text-black bg-gray-100 mt-[-50px] hover:text-blue-700">
      FAQs
    </button>
  </Link>
      </div>

      
    </div>
  );
};

export default Footer2;