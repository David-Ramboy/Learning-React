import React from "react";

export default function Main({lightMode}){
    return(
        <div className={`main container ${lightMode.container}`}>
            <h1 className={`${lightMode.parag}`}>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars in GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powes thousands of enterprise apps, including mobile apps</li>
            </ul>
            <div className="logo-background"></div>
        </div>
    )
}