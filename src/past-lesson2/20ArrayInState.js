import React from 'react'
import ReactDOM from 'react-dom/client';

function App(){

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    /*
   let numlength = thingsArray.length
  
    function handleAddItem(){
        // i increase the length of the thingsArray everytime i click
        numlength++
        let thing =  `Thing ${numlength}`
        // i push the thing var in thingsArray only in the scope of handleAddItem
        thingsArray.push(thing)
        console.log(thingsArray)
        
        // then i get the state thingsArray function and modify it so that can return a new array 
        setThingsArray((prevArr) => {
            let newArr = prevArr.map((item) => {
                return item
            })
            return newArr
        })
    } 
    */
    // or use this
    function handleAddItem(){
        setThingsArray(prevThingsArr => {
            return [...thingsArray, `Thing ${prevThingsArr.length + 1}`]
        })
    }


    // the mapthingsArray accept the new array then return the and display the "Thing (count)" 

    
    const mapThingsArr = thingsArray.map((item,index) => {
        return <h1 key={index} >{item}</h1>
   })
    return(
        <div>
            <h1 onClick={handleAddItem}>Add Item</h1>
            {mapThingsArr}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
