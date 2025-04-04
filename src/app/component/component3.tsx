import Image from "next/image";
import Link from "next/link";

const Component3 = () => {
    return (
        <div className="max-h-[811px]  mt-[450px] md:mt-[100px] md:max-w-[1440px] md:max-h-[761px]">
  <h4 className="w-[136px] h-[25px] mt-48 ml-[26px] font-clash text-xl md:ml-[80px]">
    New ceramics
  </h4>
  <br />

  <div className="grid grid-cols-2 ml-[24px] md:flex md:gap-[20px] md:ml-[80px]">
    <div className="hidden md:block">
      <Link href="/product" passHref>
        <Image
          src="/photos/Chair.png"
          alt="The Dandy chair"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">The Dandy chair</span>
      <br />
      <span className="font-satoshi">£250</span>
    </div>

    <div className="md:hidden">
      <Link href="/product" passHref>
        <Image
          src="/photos/Photo.png"
          alt="Rustic Vase Set"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">Rustic Vase Set</span>
      <br />
      <span className="font-satoshi">£155</span>
    </div>

    <div className="hidden md:block">
      <Link href="/product" passHref>
        <Image
          src="/photos/Photo.png"
          alt="Rustic Vase Set"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">Rustic Vase Set</span>
      <br />
      <span className="font-satoshi">£155</span>
    </div>

    <div className="md:hidden">
      <Link href="/product" passHref>
        <Image
          src="/photos/Parent.png"
          alt="The Lucy Lamp"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">The Lucy Lamp</span>
      <br />
      <span className="font-satoshi">£399</span>
    </div>

    <div className="hidden md:block">
      <Link href="/product" passHref>
        <Image
          src="/photos/Parent2.png"
          alt="The Silky Vase"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">The Silky Vase</span>
      <br />
      <span className="font-satoshi">£125</span>
    </div>

    <div className="md:hidden">
      <Link href="/product" passHref>
        <Image
          src="/photos/Parent2.png"
          alt="The Silky Vase"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">The Silky Vase</span>
      <br />
      <span className="font-satoshi">£125</span>
    </div>

    <div className="md:hidden">
      <Link href="/product" passHref>
        <Image
          src="/photos/Chair.png"
          alt="The Dandy chair"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">The Dandy chair</span>
      <br />
      <span className="font-satoshi">£250</span>
    </div>

    <div className="hidden md:block">
      <Link href="/product" passHref>
        <Image
          src="/photos/Parent.png"
          alt="The Lucy Lamp"
          height={200}
          width={200}
          className="w-[163px] h-[201px] md:h-[375px] md:w-[305px]"
        />
      </Link>
      <span className="text-xl font-clash">The Lucy Lamp</span>
      <br />
      <span className="font-satoshi">£399</span>
    </div>
  </div>

  <Link href="/product" passHref>
    <button className="font-satoshi w-[342px] h-[56px] ml-[24px] text-black bg-gray-100 mt-[32px] md:w-[170px] md:ml-[635px]">
      View Collection
    </button>
  </Link>
</div>
    );
};

export default Component3;
