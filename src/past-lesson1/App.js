import React,{useState} from 'react'

// Styles
import Card from './Card'

// Components
import './App.css'
const App = () => {
    // const [count, setCount] = useState(0)
    // const Increment = () =>{
    //     setCount(count + 1)
    // }
    // const [user, setUsr] = useState('')
    // const onChangeHandle = (el) =>{
    //     setUsr(el.target.value)
    // }
    return (
        <div className='app-main'>
        {/* <div>Count: {count}</div>
        <button onClick={Increment}>Increment</button>
        <input name='user' onChange={onChangeHandle} value={user}></input> */}
            <Card name="David" age={23} gender="Male"/>
            <Card name="Claire" age={20} gender="Female"/>
            <Card name="Shaun" age={23} gender="Male"/>
            <Card name="Chelsey" age={21} gender="Female"/>

        </div>
    )
}

export default App