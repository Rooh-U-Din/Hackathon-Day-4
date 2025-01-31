import Image from "next/image"

const AboutCom4 = ()=>{
return(
    <div className="w-[390px] max-h-[757px] md:w-[1280px] md:h-[355px] md:mx-auto">
  <h4 className="h-[56px] w-[274px] ml-[24px] mt-[60px] font-clash text-xl md:w-[366px] md:h-[34px] md:mx-auto">
    What makes our brand different
  </h4>
  <div className="md:flex md:gap-10 md:mt-[-70px]">
    {/* Card 1 */}
    <div className="mt-[92px] h-[196px] w-[342px] ml-[24px] bg-gray-50 md:h-[244px] md:w-[305px]">
      <div className="absolute mt-[36px] md:h-[148px] md:w-[209px] md:mt-[48px] md:ml-[48px]">
        <Image
          src="/photos/Delivery.png"
          alt="delivery"
          height={20}
          width={20}
          className="h-[16px] w-[16px] ml-[24px] md:ml-0"
        />
        <br />
        <p className="ml-[24px] text-xl font-clash md:ml-0">Next day as standard</p>
        <br />
        <p className="ml-[24px] font-satoshi md:ml-0">
          Order before 3pm and get your order the <br className="md:hidden" /> next day as standard
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="mt-[92px] h-[196px] w-[342px] ml-[24px] bg-gray-50 md:h-[244px] md:w-[305px]">
      <div className="absolute mt-[36px] md:h-[148px] md:w-[209px] md:mt-[48px] md:ml-[48px]">
        <Image
          src="/photos/icon2.png"
          alt="artisans"
          height={20}
          width={20}
          className="h-[16px] w-[16px] ml-[24px] md:ml-0"
        />
        <br />
        <p className="ml-[24px] text-xl font-clash md:ml-0">Made by true artisans</p>
        <br />
        <p className="ml-[24px] font-satoshi md:ml-0">
          Handmade crafted goods made with real <br className="md:hidden" /> passion and craftsmanship
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="mt-[92px] h-[196px] w-[342px] ml-[24px] bg-gray-50 md:h-[244px] md:w-[305px]">
      <div className="absolute mt-[36px] md:h-[148px] md:w-[209px] md:mt-[48px] md:ml-[48px]">
        <Image
          src="/photos/icon3.png"
          alt="prices"
          height={20}
          width={20}
          className="h-[16px] w-[16px] ml-[24px] md:ml-0"
        />
        <br />
        <p className="ml-[24px] text-xl font-clash md:ml-0">Unbeatable prices</p>
        <br />
        <p className="ml-[24px] font-satoshi md:ml-0">
          For our materials and quality you won’t <br className="md:hidden" /> find better prices anywhere
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="mt-[92px] h-[196px] w-[342px] ml-[24px] bg-gray-50 md:h-[244px] md:w-[305px]">
      <div className="absolute mt-[36px] md:h-[148px] md:w-[209px] md:mt-[48px] md:ml-[48px]">
        <Image
          src="/photos/icon4.png"
          alt="packaging"
          height={20}
          width={20}
          className="h-[16px] w-[16px] ml-[24px] md:ml-0"
        />
        <br />
        <p className="ml-[24px] text-xl font-clash md:ml-0">Recycled packaging</p>
        <br />
        <p className="ml-[24px] font-satoshi md:ml-0">
          We use 100% recycled to ensure our <br className="md:hidden" /> footprint is more manageable
        </p>
      </div>
    </div>
  </div>
</div>
)
}

export default AboutCom4