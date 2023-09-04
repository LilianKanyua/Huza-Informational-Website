import React from "react";
import'./style.css'
const Navbar =()=>{
    return(
        <div className=" nav">
        <div className="navbar">
            <img src={process.env.PUBLIC_URL +'/images/Logo.png'} alt="Pic" className="logo"      />
            <ul className="list">
                <li>Home</li>
                <li>About</li>
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
 </div>
    )
}
export default Navbar