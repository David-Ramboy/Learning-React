import React from 'react';

export default function Star(props){
    return(
    
        <p className='star--symbol' onClick={props.toggleFunc}>{props.isFilled}</p> 

    )
}