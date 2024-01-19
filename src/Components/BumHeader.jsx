import jumialogo from "../assets/jumialogo.png"
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import AccountDrop from "./AccountDrop";
import { useState } from "react";
import HelpDrop from "./HelpDrop";



const BumHeader = ()=> {
    const [AccDrop, setAccountDrop] =useState(false);

    const [HelpdDrop, setHelpDrop] =useState(false);
   
    return(
       <div className="Bumheader">
        <article className="bumwrapper">
            <div className="jumlogo">
            <img src={jumialogo} alt="" />
            </div>
            <div className="inpuAcc">
            <div className="inputdiv">
            <FaSearch style={{color: "grey", fontSize: "40px", paddingLeft: "10px"}}/>
            <input placeholder="Search products, brands and categories" />
           
            </div>
            <button className="upbtn">Search</button>
           
            <div className="Account">
                <div className="Acc"  onClick={()=> setAccountDrop(!AccDrop)}>
            <FaRegUser style={{fontSize: "40px", padding: "5px"}}/>
            <span>Account</span>
           {
            AccDrop ?  <MdOutlineKeyboardArrowUp  style={{fontSize: "33px"}}/> : <MdOutlineKeyboardArrowDown  style={{fontSize: "33px"}} /> 

           }
            </div>
                <div className="Acc"  onClick={()=> setHelpDrop(!HelpdDrop)}>
            <MdOutlineHelpOutline style={{fontSize: "40px", padding: "5px"}}/>
            <span>Help</span>
            {
             HelpdDrop ?  <MdOutlineKeyboardArrowUp style={{fontSize: "33px"}} /> : <MdOutlineKeyboardArrowDown  style={{fontSize: "33px"}}/>
             }
            </div>
                <div className="Acc">
            <MdOutlineShoppingCart  style={{fontSize: "40px", padding: "5px"}}/>
            <span>Cart</span>
         
            </div>
           { 
           AccDrop?  <AccountDrop/> : null
            
           }
           {
        HelpdDrop?   <HelpDrop/> : null
           }

            </div>
            </div>
        </article>
       </div>
    )
}
export default BumHeader