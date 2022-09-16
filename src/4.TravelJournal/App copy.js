import React from "react";
import Head from "./components/Head"
import Main from "./components/Main"
import DataPlaces from "./placesData"

export default function App(){
    let displayData = DataPlaces.map(item => {
        return <Main key={item.id} displayData={item}/>
    })
    
    return(
        <div>
            <Head/>
            {displayData}            
        </div>
    )
}