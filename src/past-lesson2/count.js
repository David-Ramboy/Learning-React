import React from 'react'
import ReactDOM from 'react-dom/client';
import Count from './Count'

function App(){
    
    const [number, setnumber] = React.useState(0)
    function increase(){
        setnumber(number + 1)
    }
    function decrease(){
        setnumber(number - 1)
    }
    return(
        <>
        <h1 onClick={increase}>increase</h1>
        <Count number={number}/>
        <h1 onClick={decrease}>decrease</h1>

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)