import React from "react";
import Reactlogo from './logo512.png'

export default function Navbar({lightMode, handlePageMode}){
   
    return(
        <nav className={`container ${lightMode.circle}`}>
            <img src={Reactlogo} alt="react-logo" className="nav-logo" />
            <p>ReactFacts</p>
            <p className={`mode mode--left ${lightMode.parag}` }>Light</p>
            <div className={`switch--mode ${ lightMode.switch}`} onClick={handlePageMode}><div className={`circle ${lightMode.circle}`} ></div></div>
            <p className={`mode ${lightMode.parag}` }>Dark</p>
        </nav> 
    )
}