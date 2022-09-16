import React from 'react'

function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src='react-logo.png' className='img-logo' alt='reactlogo' />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header