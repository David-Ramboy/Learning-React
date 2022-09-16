import React from 'react'
import Head from './components/Head.js'
import Main from './components/Main.js'
import './Style.css'
export default function App(){
    return(
        <div className='meme--container'>
            <Head/>
            <Main/>
        </div>
    )
}