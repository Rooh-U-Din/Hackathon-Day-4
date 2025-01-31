import Image from "next/image";
import Link from "next/link";

const Component1 = () => {
  return (
    <div className="bg-[rgb(42,37,75)] h-[502px] w-[390px] relative flex flex-col justify-start md:w-[1280px] md:h-[584px] md:ml-[80px] md:mt-[90px]">
      <div className="absolute w-[342px] h-[135px] mt-[40px] ml-[24px] md:ml-[60px] md:mt-[60px] md:w-[513px] md:h-[187px]">
        <h2 className="text-white font-clash text-4xl">
          The furniture brand for the future, with timeless designs
        </h2>
        <Link href="/product" passHref>
          <button className="w-[170px] h-[56px] hover:bg-[rgb(59,52,104)] text-white bg-[rgb(78,77,147)] mt-[32px] sm:hidden md:block">
            View Collection
          </button>
        </Link>
      </div>

      <div className="absolute w-[342px] h-[223px] ml-[24px] mt-[255px] md:mt-[443px] md:ml-[60px]">
        <p className="text-white font-satoshi text-xl md:w-[602px] md:h-[81px]">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </p>
        <button className="font-satoshi w-[342px] h-[56px] text-white bg-[rgb(78,77,147)] mt-[32px] md:hidden">
          View Collection
        </button>
      </div>

      <Image
        src="/photos/Right Image.png"
        alt="Chair"
        height={400}
        width={400}
        className="sm:hidden md:block absolute md:ml-[760px] md:mt-[0] w-[520px] h-[584px]"
      />
    </div>
  );
};

export default Component1;
