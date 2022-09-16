import React from 'react'
import ReactDOM from 'react-dom/client';
import Box from './Box'
import boxData from './boxData';
import './box.css'
function App(){
        const [boxes, setboxes] = React.useState(boxData)

        function toggle(id){
    // using object manipulation
            // setboxes(prevBox => {
            //         let newArr = [...prevBox]
            //         let result = boxes[id-1].on ? false : true
            //         newArr[id-1].on = result
            //         console.log(newArr, 'dsaf')
            //         return newArr
            //     })


    // Using Map Imperative
            // setboxes(prevBox => {
            //     let newBox = prevBox.map(item => {
            //         if(item.id === id){ 
            //             return {...item, on: item.on ? false : true } 
            //         }else{
            //             return item
            //         }
            //     })
            //     return newBox
            // })
    // Using for loop Declarative
            setboxes(prevBox => {
                let newBox = []

                for(let i = 0; i < prevBox.length; i++){
                    let currBox = prevBox[i]
                    if(currBox.id === id){
                        let newObj = {...currBox, on:currBox.on ? false : true}
                        newBox.push(newObj)
                    }else{
                        newBox.push(currBox)
                    }

                }
                return newBox

            })
        }
        console.log(boxes,"new")
        let displayBox = boxes.map(item => {
            return <Box on={item.on} key={item.id}  onclick={() => toggle(item.id)}  />
        })
    return(
        <div>
            {displayBox}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)