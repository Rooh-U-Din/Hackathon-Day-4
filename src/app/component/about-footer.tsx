import Image from "next/image"

const AboutFooter = () => {
    return (
        <div className="h-[540px] w-[390px] bg-[rgb(42,37,75)] md:mt-[501px] md:h-[350px] md:w-[1440px]">
  {/* Logo */}
  <h1 className="font-clash text-white ml-[24px] mt-[40px] absolute text-4xl md:ml-[80px] md:mt-[53px]">
    Avion
  </h1>

  {/* Address Section */}
  <div className="ml-[24px] mt-[106px] absolute md:ml-[80px] md:mt-[119px]">
    <ul className="font-satoshi text-white">
      <li>21 New York Street</li>
      <li>New York City</li>
      <li>United States of America</li>
      <li>432 34</li>
    </ul>
  </div>

  {/* Social Links Section */}
  <p className="font-clash text-white ml-[205px] mt-[57px] absolute text-xl md:ml-[297px] md:mt-[53px]">
    Social links
  </p>
  <div className="grid grid-cols-3 h-[72px] w-[120px] ml-[205px] mt-[106px] absolute md:grid md:grid-cols-6 md:gap-[24px] md:ml-[297px] md:mt-[95px] md:w-[264px]">
    <Image src="/photos/i1.png" alt="social-icon" height={24} width={24} className="h-[24px] w-[24px]" />
    <Image src="/photos/i2.png" alt="social-icon" height={24} width={24} className="h-[24px] w-[24px]" />
    <Image src="/photos/i3.png" alt="social-icon" height={24} width={24} className="h-[24px] w-[24px]" />
    <Image src="/photos/i4.png" alt="social-icon" height={24} width={24} className="h-[24px] w-[24px]" />
    <Image src="/photos/i5.png" alt="social-icon" height={24} width={24} className="h-[24px] w-[24px]" />
    <Image src="/photos/i6.png" alt="social-icon" height={24} width={24} className="h-[24px] w-[24px]" />
  </div>

  {/* Company and Menu Links Section */}
  <div>
    {/* Company Links */}
    <ul className="text-white font-sans space-y-3 w-[105px] h-[175px] ml-[24px] mt-[266px] absolute md:ml-[1167px] md:mt-[53px]">
      <li className="w-[105px] h-[20px] text-base font-clash">Our company</li>
      <li className="text-sm font-satoshi">About us</li>
      <li className="text-sm font-satoshi">Vacancies</li>
      <li className="text-sm font-satoshi">Contact us</li>
      <li className="text-sm font-satoshi">Privacy</li>
      <li className="text-sm font-satoshi">Returns policy</li>
    </ul>

    {/* Menu Links */}
    <ul className="text-white space-y-3 ml-[205px] mt-[266px] absolute md:ml-[731px] md:mt-[53px]">
      <li className="w-[84px] h-[20px] text-base font-clash">Menu</li>
      <li className="text-sm font-satoshi">New arrivals</li>
      <li className="text-sm font-satoshi">Best sellers</li>
      <li className="text-sm font-satoshi">Recently viewed</li>
      <li className="text-sm font-satoshi">Popular this week</li>
      <li className="text-sm font-satoshi">All products</li>
    </ul>
  </div>

  {/* Divider Line */}
  <Image
    src="/photos/l.png"
    alt="divider-line"
    height={1}
    width={342}
    className="h-px w-[342px] ml-[24px] mt-[481px] absolute md:h-px md:w-[1277px] md:ml-[80px] md:mt-[295px]"
  />

  {/* Copyright Text */}
  <p className="font-satoshi ml-[113px] mt-[501px] absolute text-white md:ml-[80px] md:mt-[311px]">
    Copyright 2022 Avion LTD
  </p>
</div>
    )
}

export default AboutFooter