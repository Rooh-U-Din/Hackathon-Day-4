import Image from "next/image"

const Component6 = () => {
    return (
        <div className="max-w-[390] h-[828] md:flex md:mt-[612] md:max-w-[1440] md:h-[603]">
            <div className="md:ml-[84] md:mt-[72] ">
            <div className="ml-[24] mt-[48] md:w-[536] md:h-[225]">
                <h2 className="text-xl md:w-[514] md:h-[68] md:text-2xl font-clash">From a studio in London to a<br className="md:hidden"></br>
                 global brand with<br></br>
                 over 400 outlets</h2>
            </div>
            <br />
            <div className="ml-[24] text-gray-500 text-sm md:mt-[-93] font-satoshi">When we started Avion,the idea was simple.Make high <br className="md:hidden" /> quality furniture <br className=" hidden md:block" /> affordable and available for the mass <br className="md:hidden"/> market. <br className=" hidden md:block"/><br className=" hidden md:block"/> <br></br> 
           <br className="md:hidden"></br><br className="md:hidden font-satoshi" /> Handmade, and lovingly crafted furniture and <br className="md:hidden" /> homeware is what we live,<br className=" hidden md:block"/> breathe and design so our <br className="md:hidden"/> Chelsea boutique become the hotbed for the <br className=" hidden md:block"/> London <br className="md:hidden" /> interior design community.
            </div>
            </div>
            <br />
            <br />
            <br />
            <button className="w-[342] h-[56] ml-6 bg-gray-100 md:absolute md:w-[150] md:ml-[84] md:mt-[493] font-satoshi">Get in touch</button>
            <div>
            <Image src="/photos/Image.png" alt="img" height={400} width={400} className="w-[390] h-[358] md:w-[720] md:h-[603]"></Image>
        </div>
        </div>
    )
}
export default Component6