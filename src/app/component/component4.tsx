import Image from "next/image";
import Link from "next/link";

const Component4 = () => {
    return (
        <div className="max-w-[390px] h-[573]  overflow-hidden mt-[100] md:max-w-[1440] md:h-[644]">
            <h1 className="text-xl ml-[24px] md:ml-[80] font-clash">Our popular products</h1>
            <br />
            <div className=" hidden md:block ml-[80]">
                <div className="flex md:gap-[20]">
                    <div>
                        <Link href="/product" passHref>
                            <Image
                                src="/photos/Large.png"
                                alt="The Poplar suede sofa"
                                height={300}
                                width={300}
                                className="w-[630] h-[375]"
                            />
                        </Link>
                        <p className="mt-[8] font-clash">The Poplar suede sofa</p>
                        <span className="font-satoshi">£980</span>
                    </div>
                    <div>
                        <Link href="/product" passHref>
                            <Image
                                src="/photos/Chair.png"
                                alt="The Dandy chair"
                                height={300}
                                width={300}
                                className="w-[305] h-[375]"
                            />
                        </Link>
                        <p className="mt-[8] font-clash">The Dandy chair</p>
                        <span className="font-satoshi">£250</span>
                    </div>
                    <div>
                        <Link href="/product" passHref>
                            <Image
                                src="/photos/Chair2.png"
                                alt="The Dandy chair"
                                height={300}
                                width={300}
                                className="w-[305] h-[375]"
                            />
                        </Link>
                        <p className="mt-[8] font-clash">The Dandy chair</p>
                        <span className="font-satoshi">£250</span>
                    </div>
                </div>
                <Link href="/product" passHref>
                    <button className="font-satoshi w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:ml-[635]">
                        View Collection
                    </button>
                </Link>
            </div>

            {/* For Small Screens */}
            <div className="flex gap-[5px] ml-[24px] max-w-[390] md:hidden">
                <div className="w-[200px] flex-shrink-0">
                    <Link href="/product" passHref>
                        <Image
                            src="/photos/Parent.png"
                            alt="The Lucy Lamp"
                            height={200}
                            width={200}
                            className="w-[200px] h-[251px]"
                        />
                    </Link>
                    <span className="text-xl block">The Lucy Lamp</span>
                    <span>£250</span>
                </div>

                <div className="w-[200px] flex-shrink-0">
                    <Link href="/product" passHref>
                        <Image
                            src="/photos/Photo.png"
                            alt="Rustic Vase Set"
                            height={200}
                            width={200}
                            className="w-[200px] h-[251px]"
                        />
                    </Link>
                    <span className="text-xl block">Rustic Vase Set</span>
                    <span>£300</span>
                </div>
            </div>

            <button className="font-satoshi md:hidden w-[342] h-[56] ml-[24] text-black bg-gray-100 mt-[32] md:w-[170] md:ml-[635]">
                View collection
            </button>
        </div>
    );
};

export default Component4;
