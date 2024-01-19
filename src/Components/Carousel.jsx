import { useContext, useState } from "react";

import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { ThemeContext } from "./Context/Theme";
// import img22 from "../assets/img22.jpg";

const Carousel = ()=>{
    const images = ["./jpics.jpg", "./jpics3.jpg", "./jpics4.jpg", "./jpics5.jpg", "./jpics6.jpg","./jpics7.jpg"];
    let [count, setCount] = useState (0);
    const {Theme}=useContext(ThemeContext)

    const handleImages = () =>{
        if (count <= images.length){
        setCount ((count + 1) % images.length)

        }else{
            setCount(count +1)
        }
        
    }

    const handleImages2 = () =>{
        if (count <= images.length){
            setCount ((count - 1 + images.length) % images.length)
    
            }else{
                setCount(count -1)
            }
            
        
    }

    return(
        <>
        <div className="carouselHolder">
            <div className="left" onClick={handleImages2} style={{ backgroundColor: Theme === "light" ? "red" : "yellow",}}> <FaLessThan style={{fontSize: "20px"}}/> </div>
             <img src={images[count]} alt="" />
              
            <div className="right" onClick={handleImages}><FaGreaterThan style={{fontSize: "20px"}}/></div>
        </div>
        </>
    )
}

export default Carousel;