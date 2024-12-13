import Image from "next/image"

const AboutCom4 = ()=>{
return(
    <div className="w-[390] max-h-[757] md:w-[1280] md:h-[355] md:mx-auto ">
    <h4 className="h-[56] w-[274] ml-[24] mt-[60] font-clash text-xl md:w-[366] md:h-34 md:mx-auto">What makes our brand different</h4>
    <div className="md:flex md:gap-10 md:mt-[-70] ">
    <div className="mt-[92] h-[196] w-[342]  ml-[24] bg-gray-50 md:h-[244] md:w-[305]">
        <div className="absolute mt-[36] md:h-[148] md:w-[209] md:mt-[48] md:ml-[48]">
        <Image src="/photos/Delivery.png" alt="delivery" height={20} width={20} className="h-[16] w-[16] ml-[24] md:ml-0 "></Image>
        <br />
        <p className="ml-[24]  text-xl font-clash md:ml-0">Next day as standard</p>
        <br />
        <p className="ml-[24]  font-satoshi md:ml-0">Order before 3pm and get your order the <br className="md:hidden"/> next day as standard</p>
        </div>
    </div>
    
    <div className="mt-[92] h-[196] w-[342] ml-[24] bg-gray-50 md:h-[244] md:w-[305]">
        <div className="absolute mt-[36] md:h-[148] md:w-[209] md:mt-[48] md:ml-[48]">
        <Image src="/photos/icon2.png" alt="delivery" height={20} width={20} className="h-[16] w-[16] ml-[24] md:ml-0 "></Image>
        <br />
        <p className="ml-[24]  text-xl font-clash md:ml-0">Made by true artisans</p>
        <br />
        <p className="ml-[24]  font-satoshi md:ml-0">Handmade crafted goods made with real <br className="md:hidden"  /> passion and craftmanship</p>
        </div>
    </div><div className="mt-[92] h-[196] w-[342] ml-[24] bg-gray-50 md:h-[244] md:w-[305]">
        <div className="absolute mt-[36] md:h-[148] md:w-[209] md:mt-[48] md:ml-[48]">
        <Image src="/photos/icon3.png" alt="delivery" height={20} width={20} className="h-[16] w-[16] ml-[24] md:ml-0 "></Image>
        <br />
        <p className="ml-[24]  text-xl font-clash md:ml-0">Unbeatable prices</p>
        <br />
        <p className="ml-[24]  font-satoshi md:ml-0">For our materials and quality you won’t <br className="md:hidden"  /> find better prices anywhere</p>
        </div>
    </div><div className="mt-[92] h-[196] w-[342] ml-[24] bg-gray-50 md:h-[244] md:w-[305]">
        <div className="absolute mt-[36] md:h-[148] md:w-[209] md:mt-[48] md:ml-[48]">
        <Image src="/photos/icon4.png" alt="delivery" height={20} width={20} className="h-[16] w-[16] ml-[24] md:ml-0 "></Image>
        <br />
        <p className="ml-[24]  text-xl font-clash md:ml-0">Recycled packaging</p>
        <br />
        <p className="ml-[24]  font-satoshi md:ml-0">We use 100% recycled to ensure our <br className="md:hidden" /> footprint is more manageable</p>
        </div>
    </div>
    </div>


</div>
)
}

export default AboutCom4