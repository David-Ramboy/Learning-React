import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import CardData from "./CardData";
// img rating reviewCount country title price

export default function App(){
    const cardData = CardData.map((item) => {return <Card key={item.id} {...item} />})
    return(
        <div>
            <Navbar />
            <Main />
            <div className="card-container">
                <div className="card-overflow">
                    {cardData}
                </div>
            </div>
        </div>
    )
}
