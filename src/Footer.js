import React from "react";
import facebook from "./images/icons/facebook.png"
import twitter from "./images/icons/twitter.png"
import instagram from "./images/icons/instagram.png"
import github from "./images/icons/github.png"
const Footer = ()=>{
 return  <div className="footer">
         <img className="footer-items" src={facebook}/>
         <img className="footer-items" src={twitter}/>
         <img className="footer-items" src={instagram}/>
         <img className="footer-items" src={github}/>
        </div>

};

export default Footer