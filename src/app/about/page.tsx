import AboutCom1 from "@/components/about-component";
import AboutCom2 from "@/components/about-component2";
import AboutCom3 from "@/components/about-component3";
import AboutCom4 from "@/components/about-component4";
import AboutCom5 from "@/components/about-component5";
import AboutFooter from "@/components/about-footer";
import AboutH from "@/components/aboutheader";


export default function about() {
    return (
        <div>

            <AboutH/>
            <AboutCom1/>
            <AboutCom2/>
            <AboutCom3/>
            <AboutCom4/>
            <AboutCom5/>
            <AboutFooter/>
        </div>
    )
}
