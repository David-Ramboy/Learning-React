import React from 'react'

export default function Main({displayData}){
    return(
        <main>
{/* // Title, location, startDate, endDate, description, image */}

            <img className='card--image' alt="cardimage" src={displayData.image}/>
            <div className='context'>
                <div className='card--location'>
                    <img className="location--pin" alt='pin' src="./images/logos/location-pin.png"/>
                    <p className='card--country'>{displayData.Title}</p>
                    <a href={displayData.link}>View on Google Maps</a>
                </div>
                <h1>{displayData.location}</h1>
                <p className='date-startend'>{displayData.startDate} - {displayData.endDate}</p>
                <p className='card--descript'>{displayData.description}</p>
            </div>
        </main>
    )
}