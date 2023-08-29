import React from "react";
import'./style.css'
const Navbar =()=>{
    return(
        <div className=" nav">
        <div className="navbar">
            <img src={process.env.PUBLIC_URL +'/images/Logo.png'} alt="Pic" className="logo"      />
            <ul className="list">
                <li>Home</li>
                <li>AboutUs</li>
                <li>Product</li>
            </ul>
 </div>
 <div className="introduction">
 <h5> CONNECTING RWANDA</h5>
            <p>Register and get connected<br>
            </br>
             to unlimited job opportunities </p>
            <h3>Access our services right from your feature phone with no internet needed</h3>
 </div>
 <div className="images">
 <img src={process.env.PUBLIC_URL +'/images/Group 6.png'} alt="icons" className="icons-icons"/>
 <img src={process.env.PUBLIC_URL +'/images/phon.png'} alt="icons" className="phone-icon"/>
 <hr className="hr"></hr>
 </div>
 </div>
    )
}
export default Navbar