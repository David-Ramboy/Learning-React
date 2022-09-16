// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './Style.css'

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// import React from "react";
// import ReactDOM  from "react-dom/client";

// function App(){
//     const [starWarsData,setStarWarsData] = React.useState({});
//     // geting data from api
//     // 1. Get the data (fetch) or use tools like Axios
//     // 2. Pick data and save to state
//     //old way to get data
//     React.useEffect(()=>{
//         React.
//         fetch("https://swapi.dev/api/people/1/")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))
//     })
   
//     return(
//         <>
//         <p>{JSON.stringify(starWarsData, null, 2)}</p>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

import React from "react";
import ReactDOM  from "react-dom/client";

function App(){
    const [starWarsData,setStarWarsData] = React.useState({});
    // geting data from api
    // 1. Get the data (fetch) or use tools like Axios
    // 2. Pick data and save to state
    //old way to get data
    const [count, setCount] = React.useState(1)

    console.log("Component rendered")
    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}/`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
        console.log("Effect ran")
    },[count]) // [0] compare [1]
    return(
        <>
        <p>The count   {count}</p>
        <button onClick={() =>{setCount(prev =>{ return prev + 1} )}}>click me</button>
        <p>{JSON.stringify(starWarsData, null, 2)}</p>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

// import React, {useState,useEffect} from "react"
// import ReactDOM from "react-dom/client"

// function App(){
//     const [count, setCount] = useState(0)

//     console.log("render")
//         useEffect(()=>{
//             console.log(`this is the useEffect ${count}`)
//         },[count])
//     return(
//         <div>
//             <p>Count this :{count} </p>
//             <button onClick={()=>{
//                 setCount(prev => {
//                     return prev + 1;
//                 })
//             }}>clickme</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)