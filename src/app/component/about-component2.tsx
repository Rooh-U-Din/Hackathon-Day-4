import Image from "next/image"
import Link from "next/link"

const AboutCom2 = () => {
    return (
        <div className="h-[628] w-[390] mt-[-80]  md:w-[1440] md:h-[598]">
            <div className="ml-[24] mt-[32] w-[342] h-[281] bg-[rgb(42,37,75)] md:h-[478] md:w-[634] ">
                <div className="ml-[32] mt-[36]  md:ml-[64] md:mt-[64] absolute">
                    <h2 className="font-clash text-xl text-white">It started with a small idea</h2>
                    <br /><br />
                    <p className="text-white font-satoshi">A global brand with local beginnings, our <br /> story begain in a small studio in South <br /> London in early 2014</p>
                    <br />
                    <Link href="/product" passHref><button className="w-[170] h-[56] text-white bg-[rgb(78,77,147)] mt-[32] sm:hidden md:block">View Collection</button>
    </Link>
                </div>
                <div className="absolute mt-[337]">
                <Image src="/photos/Image Block.png" alt="img" height={300} width={300} className="w-[342] h-[259] md:w-[630] md:h-[478] md:ml-[730] md:mt-[-337]"></Image>
                </div>
                
            </div>




        </div>
    )
}
export default AboutCom2