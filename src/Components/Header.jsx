import BumHeader from "./BumHeader"
import "./Header.css"
import SmallHeader from "./SmallHeader"
import TopHeader from "./TopHeader"
const Header =()=>{
    return (
       <div className="Header1">
        <TopHeader/>
        <SmallHeader/>
        <BumHeader/>
        
       </div>

    )
    }

export default Header