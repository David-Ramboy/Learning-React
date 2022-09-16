import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";

// try append the jsx variable into root div

// Don'ta forget, you're not using CDNs anymore, so there's no
// global "ReactDOM" variable to use anymore.
const element = (
    <div>
        <h1>David Bryan</h1>
        <p>Hi love drawing</p>
        <p>Painting</p>
        <p>Coding</p>
    </div>
)

// document.getElementById('root').append(element)
// document.getElementById('root').append(JSON.stringify(element))

ReactDOM.createRoot(document.getElementById('root')).render(element)
// ReactDOM.render(element, document.getElementById('root'))