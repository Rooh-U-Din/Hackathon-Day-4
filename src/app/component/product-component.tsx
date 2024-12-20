import Image from "next/image"

const ProductCom1 = () => {
    return (
        <div className="max-w-[390] md:max-w-[1440]">
            <div>
                <Image src="/photos/Framesm.png" alt="" height={400} width={400} className="md:hidden h-[146] w-[390] mt-[9]"></Image>
                <Image src="/photos/Frame.png" alt="" height={400} width={400} className="sm:hidden md:block md:h-[209] md:w-[1440] mt-[69]"></Image>
            </div>
            <div className="flex mt-[94] ml-[24] gap-[20] md:hidden">
                <button className="w-[163] h-[56] font-satoshi text-black bg-gray-50">Filters <img src="/photos/down.png" className="absolute h-[16] w-[16] ml-[108.5] mt-[-18]"></img></button>
                <button className="w-[163] h-[56] font-satoshi text-black bg-gray-50">Sorting <img src="/photos/down.png" className="absolute h-[16] w-[16] ml-[108.5] mt-[-18]"></img></button>
            </div>
            <div className="sm:hidden md:block md:max-h-[64] md:w-[1440] ml-[24]">
                <div className="flex font-satoshi gap-[12] mt-[8] text-[rgb(42,37,75)]">
                    <div>Category <img src="/photos/downb.png" className=" h-[16] w-[16] ml-[88.5] mt-[-18]"></img></div>
                    <div>Product type <img src="/photos/downb.png" className=" h-[16] w-[16] ml-[108.5] mt-[-18]"></img></div>
                    <div>Price <img src="/photos/downb.png" className="h-[16] w-[16] ml-[68.5] mt-[-18]"></img></div>
                    <div>Brand <img src="/photos/downb.png" className="h-[16] w-[16] ml-[88.5] mt-[-18]"></img></div>
                </div>
                <div className="flex gap-[16] md:ml-[679] xl:w-[237] xl:h-[48] xl:mt-[-26] xl:ml-[1179]  text-[rgb(42,37,75)]">
                    <div className="font-satoshi">Sorting by:</div>
                    <div className="font-satoshi">Date added <img src="/photos/downb.png" className="h-[16] w-[16] ml-[88.5] mt-[-18]"></img></div>
                </div>

            </div>

            <br /><br />
            <div className="sm:grid sm:grid-cols-2 ml-[24] md:flex md:gap-[20] md:ml-[80]">

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
            <br className="sm:hidden md:block" />

            <div className="sm:hidden md:flex md:gap-[20] md:ml-[80]">

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
                    <Image src="/photos/flower.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
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
                    <Image src="/photos/yellow.png" alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
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
                    <Image src="/photos/multichair.png"alt="Photo" height={200} width={200} className="w-[163] h-[201] md:h-[375] md:w-[305]"></Image>
                    <span className="text-xl font-clash">The Lucy Lamp</span>
                    <br></br>
                    <span className="font-satoshi">£399</span>
                </div>


            </div>
            <br />
            <br />
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
            <button className="font-satoshi w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:ml-[635]">View collection</button>
            <br />
            <br /><br />
        </div>
    )
}
export default ProductCom1