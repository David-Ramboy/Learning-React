import React from 'react'

export default function Joke({setup, punchLine}){
    const [isShown, setIsShown] = React.useState(false)

    function toggle(){
     setIsShown(prevIshow => {
        // return prevIshow ? false : true;
        return !prevIshow
     })
    }
     
    return(
        <div className='container'>
            {/* <h1 style={{display: isShown ? "block" : "none"}}>Setup: {setup}</h1> */}
            <h1>Setup: {setup}</h1>
            
            {/* { setup && <h3>Setup: {setup}</h3> } */}
            {/* <h1>Setup: {setup}</h1> */}
            {isShown && <p>Punchline: {punchLine}</p>}
            <button onClick={toggle}>{isShown ? 'Hide' : 'Show'} PunchLine</button>
        </div>
    )
}