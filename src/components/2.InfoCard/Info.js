import React from "react";
import Email from '../images/email.png'
import Linkedin from '../images/linkedin.svg'
export default function InforCard(){
    return(
        <main>
            <div className="img-me "></div>
            <div className="Info-div container">
                <div className="infos">
                    <h1>David Bryan</h1>
                    <h2>Frontend Developer</h2>
                    <p>davidramboy.website</p>    
                </div>
                
                <div className="btn-info">
                    <a href="/#" className="btn-icon icon-white"><img src={Email} alt="Email" className="email-icon-info"/> Email</a>
                    <a href="/#" className="btn-icon icon-blue"><img src={Linkedin} alt="linked" className="linkedin-icon-info"/> LinkedIn</a>
                </div>
            </div>
        </main>
    )
}