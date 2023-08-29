import React from "react";
import './style.css';



const AboutUs =()=>{
    return(
        <div className="divs">
             <img src={process.env.PUBLIC_URL +'/images/pn.png'} alt="phone" className="phon"/> 
             <div className="about">
             <h1>Hello world</h1>
             <p>Huza is a two way sms system that is designed to to bridge the gap between<br></br> 
               job seekers and employers in Rwanda's informal sector. Both Job seekers and <br></br>
               Employers will initiate the process by sending SMS messages containing their<br></br> 
               skills and preferences.<br></br>
               Huza is a trusted system that will only ensure you get nothing but the best and<br></br>
               ensures maximum protection of your data</p>
          
               </div>
          
        </div>
        
    )
}
export default AboutUs