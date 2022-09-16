import React from 'react'
import ReactDOM from 'react-dom/client';

function WindowTracker(){
    const [windowWidth, setWindowWidth] = 
    React.useState(window.innerWidth)
    //to avoid memory leak use function clean up
    React.useEffect(()=>{
        function watchWidth(){
            console.log("Setting up..")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', watchWidth)
        /*
        UseEffect takes a fnuction as its parameter. If that function return somehting, it needs to be a cleanup function. Otherwise, it should return nothing. If  we make it an async function, it automatically returns a promise instead of a function or nothing. Therefore,  if you want to use async operations indside of useEffect, you need to define the function separately inside of the callback function, as seen below:(in the meme Main components)
        */
        return function(){
            console.log("Cleaning up....")
            window.removeEventListener('resize',watchWidth)
        } 
    },[])
  
    console.log(windowWidth)
    return(
        <div>
        <h1>Window width : {windowWidth}</h1>
        </div>
    )
}

function App(){
    const [showTracker, setShowTracker] = React.useState(true);

    function handleOnClick(){
        setShowTracker(prev => !prev)
    }
    return (
        <div className='container'>
            <button onClick={handleOnClick}>
                Toggle WindowTracker
            </button>
            {showTracker && <WindowTracker/>}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
