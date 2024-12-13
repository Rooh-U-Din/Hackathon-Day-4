import Component1 from "@/components/component1";
import Component2 from "@/components/component2";
import Component3 from "@/components/component3";
import Component4 from "@/components/component4";
import Component5 from "@/components/component5";
import Component6 from "@/components/component6";
import Footer2 from "@/components/footer-all";
import Footer from "@/components/footer-sm";
import Header from "@/components/header";

export default function Home(){
  return (
    <div>
      <Header/>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
      <Component6/>
      <Footer/>
      <Footer2/>
    </div>
  )
}