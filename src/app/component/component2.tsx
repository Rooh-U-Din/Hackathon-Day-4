import Image from "next/image";

const Component2 = () => {
  return (
    <div className="w-[390px] max-h-[757px] md:w-[1280px] md:h-[355px] md:mx-auto">
      <h4 className="h-[56px] w-[274px] ml-[24px] mt-[60px] font-clash text-xl md:w-[366px] md:h-[34px] md:mx-auto">
        What makes our brand different
      </h4>
      <div className="md:flex md:gap-10">
        <div className="mt-[92px]">
          <Image
            src="/photos/Delivery.png"
            alt="delivery"
            height={20}
            width={20}
            className="h-[16px] w-[16px] ml-[24px] md:ml-0"
          />
          <p className="ml-[24px] mt-[40px] text-xl font-clash md:ml-0">
            Next day as standard
          </p>
          <p className="ml-[24px] mt-[34px] font-satoshi md:ml-0">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="mt-[92px]">
          <Image
            src="/photos/Checkmark--outline.png"
            alt="Checkmark--outline"
            height={20}
            width={20}
            className="h-[16px] w-[16px] ml-[24px] md:ml-0"
          />
          <p className="ml-[24px] mt-[40px] text-xl font-clash md:ml-0">
            Made by true artisans
          </p>
          <p className="ml-[24px] mt-[34px] font-satoshi md:ml-0">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>
        <div className="mt-[92px]">
          <Image
            src="/photos/Purchase.png"
            alt="purchase"
            height={20}
            width={20}
            className="h-[16px] w-[16px] ml-[24px] md:ml-0"
          />
          <p className="ml-[24px] mt-[40px] text-xl font-clash md:ml-0">
            Unbeatable prices
          </p>
          <p className="ml-[24px] mt-[34px] font-satoshi md:ml-0">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div className="mt-[92px]">
          <Image
            src="/photos/Sprout.png"
            alt="Sprout"
            height={20}
            width={20}
            className="h-[16px] w-[16px] ml-[24px] md:ml-0"
          />
          <p className="ml-[24px] mt-[40px] text-xl font-clash md:ml-0">
            Recycled packaging
          </p>
          <p className="ml-[24px] mt-[34px] font-satoshi md:ml-0">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Component2;