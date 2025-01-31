import Image from "next/image"
import Link from "next/link"

const AboutCom2 = () => {
    return (
        <div className="h-[628px] w-[390px] mt-[-80px] md:w-[1440px] md:h-[598px]">
  <div className="ml-[24px] mt-[32px] w-[342px] h-[281px] bg-[rgb(42,37,75)] md:h-[478px] md:w-[634px]">
    <div className="ml-[32px] mt-[36px] md:ml-[64px] md:mt-[64px] absolute">
      <h2 className="font-clash text-xl text-white">It started with a small idea</h2>
      <br />
      <br />
      <p className="text-white font-satoshi">
        A global brand with local beginnings, our <br /> story began in a small studio in South <br /> London in early 2014
      </p>
      <br />
      <Link href="/product" passHref>
        <button className="w-[170px] h-[56px] text-white bg-[rgb(78,77,147)] mt-[32px] hidden md:block">
          View Collection
        </button>
      </Link>
    </div>
    <div className="absolute mt-[337px]">
      <Image
        src="/photos/Image Block.png"
        alt="img"
        height={300}
        width={300}
        className="w-[342px] h-[259px] md:w-[630px] md:h-[478px] md:ml-[730px] md:mt-[-337px]"
      />
    </div>
  </div>
</div>
    )
}
export default AboutCom2