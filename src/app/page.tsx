
import Component1 from "./component/component1"
import Component2 from "./component/component2"
import Component3 from "./component/component3"
import Component4 from "./component/component4"
import Component5 from "./component/component5"
import Component6 from "./component/component6"
import Footer2 from "./component/footer-all"
import Footer from "./component/footer-sm"
import Header from "./component/header"

export default function Home(){
  return (
    <div>
      <Header/>
<Component1></Component1>
<Component2></Component2>
<Component3></Component3>
<Component4></Component4>
<Component5></Component5>
<Component6/>
<Footer/>
<Footer2/>
    </div>
  )
}