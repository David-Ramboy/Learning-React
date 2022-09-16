import React from 'react'
import ReactDOM from 'react-dom/client'

function Element(){
    return(
        <div>
            <img src='react-logo.png' alt='react-logo' width="100px" height="100px"/>
            <h1>Fun Facts released in 2013</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Powers thousands of interprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Element />)

// 1. to access to the jsx files so we create an component to access the html
// 2. [object][object]
// 3. the 2 elements in the components will work because it to wrap according jsx
// 4. declarative = you declare a Result and it automatically do it for you.
// 5. imperative = you need to declare instruction step by step to get a result or task u desire.
// 6. composable is being resourcesfull, that we use the code again and again