import Link from "next/link"

const AboutCom1 =()=>{
    return(
        <div className="w-[390px] h-[385px] md:w-[1440px] md:h-[277px]">
  <div className="mt-[200px] ml-[24px]">
    <h2 className="font-clash text-3xl">
      A brand built on the <br className="md:hidden" /> love of craftsmanship,
      <br /> quality and outstanding customer <br className="md:hidden" /> service
    </h2>
    <br />
    <Link href="/product" passHref>
      <button className="h-[56px] w-[342px] md:w-[192px] md:ml-[1120px] md:mt-[-88px] md:absolute bg-gray-100 font-satoshi">
        View our products
      </button>
    </Link>
  </div>
</div>
    )
}
export default AboutCom1