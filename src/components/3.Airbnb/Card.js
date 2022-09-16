import React from 'react';
// import BoyBike from '../images/bike-boy.jpg'
// import girl from '../images/girl.jpg';
 
export default function Card(item){
    
    // function displayOpenSpot(){
    //     if(openSpots === 0){ return <div className='card--badge'>Sold-Out</div>}
    // }
    
    let badgeText;
    if(item.openSpots === 0){
        badgeText = "Sold-Out"
    }else if(item.location === 'Online'){
        badgeText = "ONLINE"
    }
    return(
        <div className='card'>
            {/* {displayOpenSpot()} or openSpots === 0 &&*/  badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={item.img} className="image-card" alt='boy'/>
            <div className='ratings'>
                <p className='star'>★</p><p className='ratingnum'>{item.rating}</p><p className='ratingnum'>({item.reviewCount})·{item.country}</p>
            </div>
            <p className="card-title">{item.title}</p>
            <p><b>From ${item.price}</b>/ person</p>
        </div>
    )
}