import React from 'react'
import ReactDOM from 'react-dom/client'

function Page(){
    return(
        <>
            <header>
                <nav>
                    <img src='react-logo.png' width="100px" height="100px" alt='reactlogo' />
                </nav>
            </header>
            <h1>Reasons why I'm excited to learn React</h1>
            <ol>
                <li>I love react to learn</li>
                <li>More Fun!</li>
                <li>I love learning</li>
            </ol>
            <footer><small>© 20xx Ramboy development. All rights reserved.</small></footer>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page/>)

//Quiz!

// 1. What is a React component?
    // React component is a function that return jsx and it is composable

// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```
    // the function name must be PascalCase so the react render will read as components
// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))
// ```
    // the way of the react render is not the way to execute the components it must be wrap inside a tag it must be this < Header />.