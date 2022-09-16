import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import './App.css'


// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

import ContactCard from "./components/Contact";
import './props.css'

function App(){
    return(
        <div className="container">
                <ContactCard 
                    img="./images/boy.jpg"
                    name="Mr. Whiskerson"
                    phoneNum="telephone (2112) 555-1234"
                    email="Whiskerson@email"
                />
                <ContactCard
                    img="./images/airBnb.png"
                    name="Mr.Jowats"
                    phoneNum="telephone (122)440-2314"
                    email="jowats@email"

                />
                <ContactCard
                    img="./images/water-ball.jpg"
                    name="Ms. simsas"
                    phoneNum="telphone (232)11-23"
                    email="Simsas@email"

                />
                <ContactCard
                    img="./images/woman.jpg"
                    name="Ms crisyy"
                    phoneNum="telephone 1111-444"
                    email="crisyy@email"
                />
        </div>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)