// import React from 'react'
// import ReactDOM from 'react-dom/client'

// function temporaryName(){
//     return(
//         <div>
//             <img src='react-logo.png' alt='react-logo' width="100px" height="100px"/>
//             <h1>Fun Facts released in 2013</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on Github</li>
//                 <li>Powers thousands of interprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// // ReactDOM.createRoot(document.getElementById('root')).render(temporaryName())

// function TemporaryName(){
//     return(
//         <div>
//             <img src='react-logo.png' alt='react-logo' width="100px" height="100px"/>
//             <h1>Fun Facts released in 2013</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on Github</li>
//                 <li>Powers thousands of interprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<TemporaryName />)

//Challenge

import React from 'react';
import ReactDOM from 'react-dom/client';

function Element(){
    return(
        <>
            <h1>Reason's why you excited to learn React</h1>
            <ol>
                <li>I want to learn framework of javascript</li>
                <li>I want to become front end dev by using this</li>
                <li>More fun!</li>
                <li>To learn more!</li>
            </ol>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Element/>)