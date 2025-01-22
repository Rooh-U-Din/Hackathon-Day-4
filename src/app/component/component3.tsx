import Image from "next/image"
import Link from "next/link"

const Component3 = () => {
    return (
        <div className="max-h-[811] max-w-[390] mt-[450] md:mt-[100] md:max-w-[1440] md:max-h-[761]">
            <h4 className="w-[136] h-[25] mt-48 ml-[26] font-clash text-xl md:ml-[80]">New ceramics</h4>
            <br />
            <div className="grid grid-cols-2 ml-[24] md:flex md:gap-[20] md:ml-[80]">

            <div className="sm:hidden md:block">
                    <Image src="/photos/Chair.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">The Dandy chair</span>
                    <br />
                    <span className="font-satoshi">£250</span>
                </div>

                <div className="md:hidden">
                    <Image src="/photos/Photo.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">Rustic Vase Set</span>
                    <br />
                    <span className="font-satoshi">£155</span>
                </div>

                <div className="sm:hidden md:block">
                    <Image src="/photos/Photo.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">Rustic Vase Set</span>
                    <br />
                    <span className="font-satoshi">£155</span>
                </div>
                <div className="md:hidden">
                    <Image src="/photos/Parent.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">The Lucy Lamp</span>
                    <br></br>
                    <span className="font-satoshi">£399</span>
                </div>
               
                <div className="sm:hidden md:block">
                    <Image src="/photos/Parent2.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">The Silky Vase</span>
                    <br />
                    <span className="font-satoshi">£125</span>
                </div>
                <div className="md:hidden">
                    <Image src="/photos/Parent2.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">The Silky Vase</span>
                    <br />
                    <span className="font-satoshi">£125</span>
                </div>
                <div className="md:hidden">
                    <Image src="/photos/Chair.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">The Dandy chair</span>
                    <br />
                    <span className="font-satoshi">£250</span>
                </div>
                <div className="sm:hidden md:block">
                    <Image src="/photos/Parent.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">The Lucy Lamp</span>
                    <br></br>
                    <span className="font-satoshi">£399</span>
                </div>
                
                
            </div>
       
    <Link href="/product" passHref><button className="font-satoshi w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:ml-[635]">View Collection</button>
    </Link>
        </div>
    )

}
export default Component3