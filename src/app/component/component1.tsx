import Image from "next/image"
import Link from "next/link"

const Component1 = () => {
    return (
        <div className=" bg-[rgb(42,37,75)] h-[502] w-[390] relative flex flex-col justify-start md:w-[1280] md:h-[584] md:ml-[80] md:mt-[90]">
            <div className="absolute w-[342] h-[135] mt-[40px] ml-[24] md:ml-[60] md:mt-[60] md:w-[513] md:h-[187]">
                <h2 className="text-white font-clash text-4xl ">The furniture brand for the future, with timeless designs</h2>
                <Link href="/product" passHref><button className="w-[170] h-[56] text-white bg-[rgb(78,77,147)] mt-[32] sm:hidden md:block">View Collection</button>
    </Link>
    
            </div>
            <div className="absulute w-[342] h-[223] ml-[24] mt-[255] md:mt-[443] md:ml-[60] ">
                <p className="text-white font-satoshi text-xl md:w-[602] md:h-[81] ">A new era in eco friendly furniture with Avelon, the French luxury retail brand
                    with nice fonts, tasteful colors and a beautiful way to display things digitally
                    using modern web technologies.</p>
                <button className="font-satoshi w-[342] h-[56] text-white bg-[rgb(78,77,147)] mt-[32] md:hidden  ">View collection</button>
            </div>
                <Image src="/photos/Right Image.png" alt="Chair" height={400} width={400} className="sm:hidden md:block absolute md:ml-[760] md:mt-[0] w-[520] h-[584]"></Image>





        </div>
    )
}
export default Component1