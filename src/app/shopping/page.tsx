import BurgerMenu from "../component/burger-menu";
import Footer2 from "../component/footer-all";
import Footer from "../component/footer-sm";
import Header from "../component/header";
import ShoppingCom1 from "../component/Cart";

export default function shopping (){
    return(
        <div>
            <BurgerMenu/>
            <Header/>
            <ShoppingCom1/>

            <Footer/>
            <Footer2/>


        </div>
    )
}