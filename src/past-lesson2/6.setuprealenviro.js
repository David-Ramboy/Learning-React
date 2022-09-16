// to run JSX
import React from "react"
// to run reactDOM
import ReactDOM from "react-dom/client"
// import { renderMatches } from "react-router-dom"

const navbar = (
    <nav>
        <h1>Bobs Bistros</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// ReactDOM.render(navbar, document.getElementById('root'))
ReactDOM.createRoot(document.getElementById('root')).render(navbar)