import React from "react";

export default function Box(props){

    let style = {
        backgroundColor: props.on ? "#222222" : ""
    }

    return(
        <div style={style} onClick={props.onclick} className="box"></div>
    )   
}