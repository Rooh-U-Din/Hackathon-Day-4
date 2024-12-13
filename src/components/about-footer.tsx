import Image from "next/image"

const AboutFooter = () => {
    return (
        <div className="h-[540] w-[390] bg-[rgb(42,37,75)] md:mt-[501] md:h-[350] md:w-[1440]">
            <h1 className="font-clash text-white ml-[24] mt-[40] absolute text-4xl md:ml-[80] md:mt-[53]">Avion</h1>
            <div className="ml-[24] mt-[106] absolute md:ml-[80] md:mt-[119]">
                <ul className="font-satoshi text-white">
                    <li>21 New York Street</li>
                    <li>New York City</li>
                    <li>United States of America</li>
                    <li>432 34</li>
                </ul>
            </div>
            <p className="font-clash text-white ml-[205] mt-[57] absolute text-xl md:ml-[297] md:mt-[53]">Social links</p>
            <div className="grid grid-cols-3 h-[72] w-[120] ml-[205] mt-[106] absolute md:absolute md:grid md:grid-cols-6 md:gap-[24] md:ml-[297] md:mt-[95] md:w-[264]">
                <Image src="/photos/i1.png" alt="i" height={100} width={100} className="h-[24] w-[24]"></Image>
                <Image src="/photos/i2.png" alt="i" height={100} width={100} className="h-[24] w-[24]"></Image>
                <Image src="/photos/i3.png" alt="i" height={100} width={100} className="h-[24] w-[24]"></Image>
                <Image src="/photos/i4.png" alt="i" height={100} width={100} className="h-[24] w-[24]"></Image>
                <Image src="/photos/i5.png" alt="i" height={100} width={100} className="h-[24] w-[24]"></Image>
                <Image src="/photos/i6.png" alt="i" height={100} width={100} className="h-[24] w-[24]"></Image>
            </div>
            <div>
            
                <ul className="text-white font-sans space-y-3 w-[105] h-[175] ml-[24] mt-[266] absolute md:ml-[1167] md:mt-[53]">
                    <li className="w-[105] h-[20] text-base font-clash">Our company</li>
                    <li className="text-sm font-satoshi">About us</li>
                    <li className="text-sm font-satoshi">Vacancies</li>
                    <li className="text-sm font-satoshi">Contact us</li>
                    <li className="text-sm font-satoshi">Privacy</li>
                    <li className="text-sm font-satoshi">Returns policy</li>
                </ul>

                <ul className="text-white space-y-3 ml-[205] mt-[266] absolute md:ml-[731] md:mt-[53]">
                    <li className="w-[84] h-[20] text-base font-clash">Manu</li>
                    <li className="text-sm font-satoshi">New arrivals</li>
                    <li className="text-sm font-satoshi">Best sellers</li>
                    <li className="text-sm font-satoshi">Recently viewed</li>
                    <li className="text-sm font-satoshi">Popular this week</li>
                    <li className="text-sm font-satoshi">All products</li>
                </ul>

            </div>
            <Image src="/photos/l.png" alt="line" height={100} width={100} className="h-px w-[342] ml-[24] mt-[481] absolute md:h-px md:w-[1277] md:ml-[80] md:mt-[295]"></Image>
<p className="font-satoshi ml-[113] mt-[501] absolute text-white md:ml-[80] md:mt-[311]">Copyright 2022 Avion LTD</p>



        </div>
    )
}

export default AboutFooter