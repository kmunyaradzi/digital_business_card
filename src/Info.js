import React from "react";
import mypic from './images/mypic.png';
import mail from './images/icons/mail.png';
import linkedin from './images/icons/linkedin.png';
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";


const Info = () => {
    return <div className="header">
       <img  className="main-image" src={mypic } />;  
          <h1> Shepard Munyaradzi</h1>
           <h3>Senior Web Developer</h3>
           <h5>www.kshapsmultimedia.com</h5>
           <div className="info-button">
           <button className="info-button-mail"> <img src={mail} /> Email </button>
           <button className="info-button-linkedin"><img src={linkedin}/>Linkedin</button>
           </div>
           <About/>
           <Interest/>
           <Footer/>
          </div>
           
  };

  export default Info;