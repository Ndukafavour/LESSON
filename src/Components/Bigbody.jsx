import { useEffect, useState } from "react";
import "./Bigbody.css"
import Carousel from "./Carousel"
import blackfriday from "../assets/blackfriday.gif"
import Jforce from "../assets/Jforce.png"

const Bigbody =()=>{
    const [data, setData] =useState([]);

const url = "https://fakestoreapi.com/products/categories";

// const favour =data.slice(0,10)

const getdata = () => {
  fetch(url)
  .then((res) => res.json())
  .then((data) => setData(data))
  .catch((err) => console.log (err));

}

console.log(data)
useEffect(() =>{
    getdata()
  },[])

    return(
        <div className="bigbody">
            <div className="bigbodywrapper">
                <div className="cartdiv">
                    <div className="text">

              {
               data ?.map ((f, favour) =>(
                    <h2 key={favour}>{f}</h2>
                )
                )
              }
               </div>
                </div>
                <Carousel/>
                <div className="gif">
                    <div className="gifup">
                        <img src= {blackfriday} alt="" />
                    </div>
                    <div className="gifbum">
                        <img src= {Jforce} alt="" />
                    </div>
                </div>
            </div>
          
        </div>
    )
}
 export default Bigbody