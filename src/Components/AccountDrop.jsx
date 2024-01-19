import { FaRegUser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
const AccountDrop =()=>{
    return(
     <div className="Accdrop">
        <button className="dropbtn1">SIGN IN</button>
        <hr />
        <div className="dropdownlist">
            <div className="myacc">
            <FaRegUser style={{fontSize: "45px", padding: "5px", color: "black"}}/>
                <p>My Account</p>
            </div>
            <div className="myacc">
            <RiSecurePaymentLine  style={{fontSize: "45px", padding: "5px", color: "black"}} />
                <p>Orders</p>
            </div>
            <div className="myacc">
            <MdFavoriteBorder style={{fontSize: "45px", padding: "5px", color: "black"}} />
                <p>Save Items</p>
            </div>
        </div>
     </div>
    )
}
export default AccountDrop