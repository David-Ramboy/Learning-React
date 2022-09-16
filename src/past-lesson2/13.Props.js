import React from "react";
import ReactDOM from "react-dom/client";


function App(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;
    if(hours < 12){
        timeOfDay = "morning"
    } else if (hours > 12 && hours < 17){
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    console.log(date)
    return(
        <h1>Good {timeOfDay}</h1>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)