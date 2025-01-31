import Image from "next/image"

const AboutCom3 = ()=>{
    return (
        <div className="w-[390] h-[836] bg-gray-100 md:w-[1440] md:h-[603]">
            <Image src="/photos/image3.png" alt="img" height={300} width={300} className="w-[390] h-[350] md:h-[603] md:w-[720]"></Image>
            <div className="w-[342] h-[264] mt-[48] ml-[24] md:ml-[804] md:mt-[-500] md:w-[536]">
                <h2 className="font-clash  text-xl">Our service isn’t just <br className="md:hidden"/> personal,it’s actually <br/>
                hyper personally exquisite</h2>
                <br className=" hideen md:block"/>
                <p className="font-satoshi text-sm">When we started Avion, the idea was simple.
                     Make high quality furniture affordable and available for the mass market. <br /><br /><br />
                      Handmade, and lovingly crafted furniture and homeware is what we live, 
                      breathe and design so our Chelsea boutique become the hotbed for the London
                       interior design community.
                </p>

                <button className="h-[56] w-[342] bg-white mt-[60] md:w-[150] md:mt-[180]">Get in touch</button>


            </div>



        </div>
    )
}
export default AboutCom3