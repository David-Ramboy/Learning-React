import React from "react";
import ReactDOM from 'react-dom/client';
import "./loginForm.css"

export default function App(){
   const [formData, setFormData] = React.useState({
    email:"",
    password:"",
    confirmPassword:"",
    newsLetter:false
   })
   console.log(formData)
   function handleChange(event){
    const {name, type, checked, value} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : value 
            }
        })
   }

   function handleSubmit(event){
    event.preventDefault();
    if(formData.password === "" || formData.confirmPassword === "" || formData.email === ""){
        return alert("Please fill up")
    }
    if(formData.password === formData.confirmPassword){
        console.log("Succesfully signed up")
        if(formData.newsLetter){
            console.log("Thanks for signing up our newsletter")
        }
    }else{
        alert('please match your password')
    }

    }

    return(
        <div className="form--container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleChange} value={formData.email} placeholder="Email"/>
                <input type="text" name="password" onChange={handleChange} value={formData.password} placeholder="Enter Password"/>
                <input type="text" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} placeholder="Confirm Password"/>

                <br/>
                <div>
                    <input type="checkbox" id="newsLetter" name="newsLetter" checked={formData.newsLetter} onChange={handleChange}/>
                    <label htmlFor="newsLetter">I want to join the newsletter</label>
                </div>
                <button>Sign up</button>
            </form>
            
        </div>
        )
    }
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)