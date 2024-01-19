import { useState } from "react"
import "./Button.css"
const Button = () => {

    let [change, setChange] = useState (false)
    const firstbtn = () =>{
        if (c = firstbtn){
            setButton((count + 1))
        }else{
            setButton(count +1)
        }

            
        }
        
    }



    return(
        <div className="big">
              <button className="firstbtn"   >
                 Click me
                 </button>
                 <input placeholder="color" />
                 <button className="secbtn" >
                       Change color
                 </button>
                 <div className="changed"></div>
                 
        </div>

      
       

    )
}

export default Button