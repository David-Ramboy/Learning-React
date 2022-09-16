import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import Header from './Header'
import MainContent from './Main'
import Footer from './Footer'


function Page(){
    return(
        <>
           <Header />
           <MainContent />
           <Footer />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page/>)