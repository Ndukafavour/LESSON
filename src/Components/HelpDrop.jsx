import { BsChatLeftDots } from "react-icons/bs";
const HelpDrop =()=>{
    return(
       <div className="Helpdrop">
        <div className="helplist">
        <p>Help Center</p>
        <p>Place an Order</p>
        <p>Payment Options</p>
        <p>Track an Order</p>
        <p>Cancel an Order</p>
        <p>Returns & Refund</p>
        </div>
       <div className="helpbtn">
       <BsChatLeftDots  style={{fontSize: "25px", padding: "3px"}}/>
       LIVE CHAT
       </div>
       
        </div>
    )
}
export default HelpDrop