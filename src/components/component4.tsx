import Image from "next/image"

const Component4 = () => {

    return (
        <div className="max-w-[390px] h-[573] sm:overflow-x-auto mt-[100] md:max-w-[1440] md:h-[644]">
            <h1 className="text-xl ml-[24px] md:ml-[80] font-clash">Our popular products</h1>
            <br />
            <div className="sm:hidden md:block ml-[80] ">
                <div className="flex md:gap-[20]">
                    <div>
                        <Image src="/photos/Large.png" alt="sofa" height={300} width={300} className="w-[630] h-[375]"></Image>
                        <p className="mt-[8] font-clash">The Poplar suede sofa</p>
                        <span className="font-satoshi">£980</span>
                    </div>
                    <div>
                        <Image src="/photos/Chair.png" alt="chair" height={300} width={300} className="w-[305] h-[375]"></Image>
                        <p className="mt-[8] font-clash">The Dandy chair</p>
                        <span className="font-satoshi">£250</span>
                    </div>
                    <div>

                        <Image src="/photos/Chair2.png" alt="chair2" height={300} width={300} className="w-[305] h-[375]"></Image>
                        <p className="mt-[8] font-clash">The Dandy chair</p>
                        <span className="font-satoshi">£250</span>
                    </div>

                </div>
                <button className=" sm:hidden md:block w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:mx-auto">View collection</button>




            </div>






            {/* For Sm */}
            <div className="flex gap-[5px] ml-[24px] overflow-x-visible md:hidden">

                <div className="w-[200px] flex-shrink-0">
                    <Image
                        src="/photos/Parent.png"
                        alt="Photo"
                        height={200}
                        width={200}
                        className="w-[200px] h-[251px]"
                    />
                    <span className="text-xl block">The Dandy chair</span>
                    <span>£250</span>
                </div>


                <div className="w-[200px] flex-shrink-0">
                    <Image
                        src="/photos/Photo.png"
                        alt="Photo"
                        height={200}
                        width={200}
                        className="w-[200px] h-[251px]"
                    />
                    <span className="text-xl block">The Stylish chair</span>
                    <span>£300</span>
                </div>
            </div>
            <button className="font-satoshi md:hidden w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:ml-[635]">View collection</button>
        </div>

    )
}
export default Component4