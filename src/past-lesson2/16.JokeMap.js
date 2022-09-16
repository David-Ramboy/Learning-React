import React from "react";
import jokesData from './jokesData'
import Joke from "./components/Joke";
import ReactDOM from 'react-dom/client';

export default function App(){
const jokeElements = jokesData.map((item,index) => {return <Joke key={index} setup={item.setup} punchLine={item.punchline} /> })

return(
        <div>
            {jokeElements }
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)