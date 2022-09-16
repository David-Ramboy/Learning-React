import React from 'react'
import ReactDOM from 'react-dom/client'

function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src='react-logo.png' width="100px" height="100px" alt='reactlogo' />
                </nav>
            </header>
        </>
    )
}

function MainContent(){
    return(
        <>
            <h1>Reasons why I'm excited to learn React</h1>
            <ol>
                <li>I love react to learn</li>
                <li>More Fun!</li>
                <li>I love learning</li>
            </ol>
        </>
    )
}

function Footer(){
    return(
        <>
            <footer><small>© 20xx Ramboy development. All rights reserved.</small></footer>        
        </>
    )
}

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