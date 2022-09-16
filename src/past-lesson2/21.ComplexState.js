import React from 'react'
import ReactDOM from 'react-dom/client';
import './card.css'

function App(){
    
   const [contact, setContact] =  React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email:'itsmyrealname@example.com',
    isFavorite: false
   })

   let starIcon = contact.isFavorite ? '✩': '★'

//    function toggleFavorite(){
//         setContact(prevContact => {
//             let newContact = {...prevContact}
//             if(newContact.isFavorite === true){
//                 newContact.isFavorite = false;
//             }else{
//                 newContact.isFavorite = true;
//             }

//             return newContact
//         })
//     }

    //enclose parenthesis when you what to return value but want to stay the curly brackets
    function toggleFavorite(){
        setContact(prevContact => ({
            ...prevContact, isFavorite :  !prevContact.isFavorite
        }))
    }

    return(
        <main>
            <article className='card'>
                <img className='card--profile' src="./images/boy.jpg" alt='boy'/>
                <div className='card--info'>
                    <p className='star--symbol' onClick={toggleFavorite}>{starIcon}</p> 
                    <h2 className='card--name'>{contact.firstName + contact.lastName}</h2>
                    <p className='card--contact'>{contact.phone}</p>
                    <p className='card--email'>{contact.email}</p>                       
                </div>
            </article>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
