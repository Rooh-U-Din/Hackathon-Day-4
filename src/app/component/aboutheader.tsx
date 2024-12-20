import Image from "next/image"
import Link from "next/link"

const AboutH = () => {
    return (
        <div className="sm:w-[390] h-[54] md:w-[1440] bg-[rgb(42,37,75)]">
            <link
                rel="stylesheet"
                href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
            />
            <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap" />
            <div className="flex">
                <Image src="/photos/Deliveri.png" alt="del" height={100} width={100} className="h-[16] w-[16] mt-[11] md:ml-[516]"></Image>
                <p className="font-satoshi text-xs mt-[11] ml-[24] text-white">Free delivery on all orders over £50 with code <br className="md:hidden" />easter checkout</p>
                <Link href="/" passHref><Image src="/photos/Close.png" alt="del" height={100} width={100} className=" absolute h-[16] w-[16] mt-[15] sm:absolute sm:ml-[80] md:ml-[500] md:h-[24] md:w-[24]"></Image></Link>

            </div>
            <div className="h-[124] flex">
                <h1 className="ml-[24] mt-[20] font-clash text-2xl md:absolute md:ml-[28] md:mt-[62]">Avion</h1>
            </div>
            <div className="sm:hidden md:block absolute ml-[1047] mt-[-60]">
                <ul className="font-satoshi flex gap-[32] text-gray-300 ">
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
            
            <div className="sm:hidden md:flex ml-[1309] mt-[-60] gap-[16]">
                <Image src="/photos/Search.png" alt="profile" height={100} width={100} className="h-[16] w-[16]"></Image>
                <Image src="/photos/cart.png" alt="profile" height={100} width={100} className="h-[16] w-[16]"></Image>
                <Image src="/photos/User--avatar.png" alt="profile" height={100} width={100} className="h-[16] w-[16]"></Image>
            </div>
            <div className=" h-[54] w-[827] bg-gray-100 py-4 pl-6 sm:mt-[-50] sm:w-[390] sm:overflow-hidden md:block md:w-[1440] md:mt-[50]">
            <ul className="sm:flex font-satoshi sm:gap-[44] text-gray-500 md:ml-[318] md:w-[1440] sm:w-[390] sm:whitespace-nowrap sm:overflow-hidden ">
              <Link href="/"><li>All products</li> </Link>  
                <li>Plant pots</li>
                <li>Ceramics</li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li>
            </ul>

        </div>
        </div>
    )
}
export default AboutH