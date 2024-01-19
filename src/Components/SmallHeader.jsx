import jumiastar from "../assets/jumiastar.png"
import jumialogo from "../assets/jumialogo.png"
import { useContext } from "react"
import { ThemeContext } from "./Context/Theme"

const SmallHeader =()=>{


    const {Theme,darkMode,lightMode}=useContext(ThemeContext)

  const headerTheme = {
    
    backgroundColor: Theme === "light" ? "red" : "yellow",
    color:Theme === "light" ? "green" : "blue"
    

  }



    return(
        <div className="smallHeader" style={headerTheme}>
           <article className="smallheadwrap">
            <div className="leftsmall">
                <div className="star">
               <img src= {jumiastar} alt="" />
               
               </div>
               <p>Sell on Jumia</p>
            </div>
            <div className="rightsmall">
                <div className="image">
                <img src= {jumialogo} alt="" />
                </div>
                <h1>Jumia Blackfriday 2023</h1>
            </div>

            { Theme === "light" ? (
                  <p onClick={()=> darkMode()} style={{cursor:"pointer"}}>DarkMode</p>
            ) : (
                <p onClick={()=> lightMode()} style={{cursor:"pointer"}}>LightMode</p>
            )}

           
          
           </article>
          
        </div>
    )
}
export default SmallHeader