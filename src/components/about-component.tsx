import Link from "next/link"

const AboutCom1 =()=>{
    return(
        <div className="w-[390] h-[385] md:w-[1440] md:h-[277]">
            <div className="mt-[200] ml-[24]">
                <h2 className="font-clash text-3xl">A brand built on the <br className="md:hidden" />love of craftmanship,<br /> quality and outstanding customer <br className="md:hidden"/> service</h2>
                <br />
                <Link href="/product" passHref><button className="h-[56] w-[342] md:w-[192] md:ml-[1120] md:mt-[-88] md:absolute bg-gray-100 font-satoshi">View our products</button></Link>
            </div>


        </div>
    )
}
export default AboutCom1