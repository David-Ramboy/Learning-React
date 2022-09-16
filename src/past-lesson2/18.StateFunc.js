import React from 'react';
import ReactDOM from 'react-dom/client'

function App(){
    // let [resul,isresul]= React.useState("Yes")
    
    // function handleClick(){
    //     if(!isresul('Yes')){
    //         isresul('No')
    //     }else{

    //         isresul('Yes')
    //     }


    // }
    let [value, setValue] = React.useState(0)
    function handleIncrease(){
        console.log('add')
        //in react **value and value** didnt work
        // becausee of equal using this react think
        // you replace the value which must not

        /*Note: if you ever need the old value of state
            to help you determine the new value of state,
            you should pass a callback function to your
            state directly, This callback function will
            receive the old value of state as its parameter, which you can then use to determine
            your new value of state.
        */
        setValue(prevVal => {
            return prevVal + 1
        })
    }
    function handleDecrease(){
        setValue(prevVal => {
            return prevVal - 1
        })

    }
    return(
        <div className='state'>
            {/* <button onClick={handleOnClick}>Add Item</button>
            {displayArr} */}

            <h1 onClick={handleDecrease}>Decrease</h1>
            <h1>{value}</h1>
            <h1 onClick={handleIncrease}>Increase</h1>
            
            <div className='state--value'>
                <h1></h1>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
/*
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   the current state and modify it inside the state setter function
        setCount(current state + 1)
   or use callback and modify the previous state in to new state
        setCount(() => {})


2. When would you want to pass the first option (from answer
   above) to the state setter function?
    if you want to direct modify you value


3. When would you want to pass the second option (from answer
   above) to the state setter function?
    if you want to get the previous value then your the callback function
 */