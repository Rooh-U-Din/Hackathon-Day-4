import AboutCom1 from "../component/about-component";
import AboutCom2 from "../component/about-component2";
import AboutCom3 from "../component/about-component3";
import AboutCom4 from "../component/about-component4";
import AboutCom5 from "../component/about-component5";
import AboutFooter from "../component/about-footer";
import AboutH from "../component/aboutheader";

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
