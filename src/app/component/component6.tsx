import Image from "next/image";

const Component6 = () => {
    return (
        <div className="max-w-[390px] h-[828px] md:flex md:mt-[612px] md:max-w-[1440px] md:h-[603px] relative">
            <div className="md:ml-[84px] md:mt-[72px]">
                <div className="ml-[24px] mt-[48px] md:w-[536px] md:h-[225px]">
                    <h2 className="text-xl md:w-[514px] md:h-[68px] md:text-2xl font-clash">
                        From a studio in London to a
                        <br className="md:hidden" />
                        global brand with
                        <br />
                        over 400 outlets
                    </h2>
                </div>
                <br />
                <div className="ml-[24px] text-gray-500 text-sm md:mt-[-93px] font-satoshi">
                    When we started Avion, the idea was simple: make high
                    <br className="md:hidden" /> quality furniture
                    <br className="sm:hidden md:block" /> affordable and available for the mass
                    <br className="md:hidden" />
                    market.
                    <br className="sm:hidden md:block" />
                    <br className="sm:hidden md:block" />
                    Handmade, and lovingly crafted furniture and
                    <br className="md:hidden" />
                    homeware is what we live,
                    <br className="sm:hidden md:block" />
                    breathe and design so our
                    <br className="md:hidden" />
                    Chelsea boutique becomes the hotbed for the
                    <br className="sm:hidden md:block" />
                    London
                    <br className="md:hidden" />
                    interior design community.
                </div>
            </div>
            <br />
            <br />
            <br />
            <button className="w-[342px] h-[56px] ml-6 bg-gray-100 md:absolute md:w-[150px] md:ml-[84px] md:mt-[493px] font-satoshi">
                Get in touch
            </button>
            <div>
                <Image
                    src="/photos/Image.png"
                    alt="img"
                    height={400}
                    width={400}
                    className="w-[390px] h-[358px] md:w-[720px] md:h-[603px]"
                />
            </div>
        </div>
    );
};

export default Component6;
