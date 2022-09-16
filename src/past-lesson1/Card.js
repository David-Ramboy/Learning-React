//component
import React from 'react'
        const Card = ({name, age, gender}) => {    
        return (
        <div className='users-card'>
            <h1>User Card</h1>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
        </div>
    )               
}

export default Card