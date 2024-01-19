import jumialogo from "../assets/jumialogo.png"
import jumiastar from "../assets/jumiastar.png"
function Middleheader () {
    return(
        <div className="middle">
            <div className="middlewrap">
                <div className="left">
                    <div className="jumiastar">
                    <img src={jumiastar} alt="" />
                    </div>
                    <h3>Sell on Jumia</h3>
                </div>
                <div className="right">
                     <img src={jumialogo} alt=""/>
                  

                 </div>
               
            </div>

        </div>
    )
}

export default Middleheader