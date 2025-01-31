import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
  return (
    <div className="hidden md:block w-full bg-[rgb(42,37,75)] py-10">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        <div className="flex flex-col space-y-3 text-white">
          <h3 className="text-base font-clash">Menu</h3>
          <ul className="space-y-2">
            <li className="text-sm font-satoshi">New arrivals</li>
            <li className="text-sm font-satoshi">Best sellers</li>
            <li className="text-sm font-satoshi">Recently viewed</li>
            <li className="text-sm font-satoshi">Popular this week</li>
            <li className="text-sm font-satoshi">All products</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 text-white">
          <h3 className="text-base font-clash">Categories</h3>
          <ul className="space-y-2">
            <li className="text-sm font-satoshi">Plant pots</li>
            <li className="text-sm font-satoshi">Ceramics</li>
            <li className="text-sm font-satoshi">Tables</li>
            <li className="text-sm font-satoshi">Chairs</li>
            <li className="text-sm font-satoshi">Crockery</li>
            <li className="text-sm font-satoshi">Tableware</li>
            <li className="text-sm font-satoshi">Cutlery</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 text-white">
          <h3 className="text-base font-clash">Our company</h3>
          <ul className="space-y-2">
            <li className="text-sm font-satoshi">About us</li>
            <li className="text-sm font-satoshi">Vacancies</li>
            <li className="text-sm font-satoshi">Contact us</li>
            <li className="text-sm font-satoshi">Privacy</li>
            <li className="text-sm font-satoshi">Returns policy</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 text-white">
          <h3 className="text-base font-clash">Join our mailing list</h3>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="font-satoshi bg-[rgba(78,77,147,1)] placeholder:pl-7 h-[56px] w-full max-w-xs rounded-l-md"
            />
            <button className="font-satoshi bg-white text-black px-4 rounded-r-md">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-6">
        <Image
          src="/photos/footerline.png"
          alt="divider"
          height={1}
          width={1277}
          className="w-full h-px"
        />
        <div className="flex justify-between items-center mt-4">
          <span className="font-satoshi text-white">
            Copyright 2022 Avion LTD
          </span>
          <div className="flex gap-4">
            <Image
              src="/photos/linkedin.png"
              alt="LinkedIn"
              height={24}
              width={24}
              className="w-6 h-6"
            />
            <Image
              src="/photos/facebook.png"
              alt="Facebook"
              height={24}
              width={24}
              className="w-6 h-6"
            />
            <Image
              src="/photos/instagram.png"
              alt="Instagram"
              height={24}
              width={24}
              className="w-6 h-6"
            />
            <Image
              src="/photos/skype.png"
              alt="Skype"
              height={24}
              width={24}
              className="w-6 h-6"
            />
            <Image
              src="/photos/twitter.png"
              alt="Twitter"
              height={24}
              width={24}
              className="w-6 h-6"
            />
            <Image
              src="/photos/pinterest.png"
              alt="Pinterest"
              height={24}
              width={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <Link href="/FAQs" passHref>
          <button className="font-satoshi w-[170px] h-[36px] mt-4 bg-gray-100 text-black hover:text-blue-700">
            FAQs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer2;