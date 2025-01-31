import Image from "next/image"

const AboutCom3 = ()=>{
    return (
        <div className="w-[390px] h-[836px] bg-gray-100 md:w-[1440px] md:h-[603px]">
  <Image
    src="/photos/image3.png"
    alt="img"
    height={300}
    width={300}
    className="w-[390px] h-[350px] md:h-[603px] md:w-[720px]"
  />
  <div className="w-[342px] h-[264px] mt-[48px] ml-[24px] md:ml-[804px] md:mt-[-500px] md:w-[536px]">
    <h2 className="font-clash text-xl">
      Our service isn’t just <br className="md:hidden" /> personal, it’s actually <br />
      hyper personally exquisite
    </h2>
    <br className="hidden md:block" />
    <p className="font-satoshi text-sm">
      When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /><br /><br />
      Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
    </p>
    <button className="h-[56px] w-[342px] bg-white mt-[60px] md:w-[150px] md:mt-[180px]">
      Get in touch
    </button>
  </div>
</div>
    )
}
export default AboutCom3