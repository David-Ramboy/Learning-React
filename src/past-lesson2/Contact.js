// import React from 'react'

// export default function ContactCard(props){
//     console.log(props)
//     return (
//         <div className='contact-card'>
//             <img src={props.img} alt="boy" className='imgcard'/>
//             <h1>{props.name}</h1>
//             <p><img src='' alt="telephone"/> (2112) 555-1234 </p>
//             <div>
//                 <p>{props.phoneNum}</p>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

    //Using destructuring props
// export default function ContactCard({img,name,phoneNum,email}){
//         return (
//             <div className='contact-card'>
//                 <img src={img} alt="boy" className='imgcard'/>
//                 <h1>{name}</h1>
//                 <div>
//                     <p>{phoneNum}</p>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         )
//     }