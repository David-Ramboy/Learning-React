import React from "react";
import ReactDOM from 'react-dom/client';
import './styleinput.css'


export default function App(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "", 
        email: "",
        textArea: "",
        isFriendly: false,
        employment: "",
        favColor: ""
    })
    console.log(formData.favColor)
    
    function handleChange(event){
        const {name,value,type,checked} = event.target

        setFormData(prev =>{
            return{
                    ...prev,
                [name] : type === "checkbox" ? checked: value
                }
        })
    }

    // function handleCheckbox(event){
    //     setFormData(prev => {
    //         return{
    //             ...prev,
    //             [event.target.name]: !prev.isFriendly
    //         }
    //     })
    // }
    function handleSubmit(event){
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="text--form">

                {/* ---------- Text ---------- */}
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        name="lastName"

                        value={formData.lastName}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                    {/* -------------Textarea-------- */}
                    <textarea 
                        placeholder="Text Area" 
                        name="textArea" 
                        onChange={handleChange} 
                        value={formData.textArea}
                    />
                </div>
                {/*------------- CheckBoxes--------- */}
                <div className="checkbox--form">
                    <input 
                    className="checkbox"
                    type="checkbox" 
                    id="isFriendly"
                    checked={formData.isFriendly}
                    name="isFriendly"
                    // onClick={handleChange}
                    onChange={handleChange}
                    />
                    <label htmlFor="isFriendly">Is this person Friendly?</label>
                </div>
                {/* -----------------Radio Btns----------*/}

                <fieldset>
                    <legend>Current employment status</legend>
                    <div>
                        <input type="radio" id="unemployed" name="employment" value="unemployed" onChange={handleChange}
                        checked={formData.employment === "unemployed"}
                        />
                        <label htmlFor="unemployed">unemployed</label>
                    </div>
                        <input type="radio" id="partTime" name="employment" value="partTime" onChange={handleChange}
                        checked={formData.employment === "partTime"}
                        />
                        <label htmlFor="partTime">Parttime</label>
                    <div>
                    </div>
                    <div>
                        <input type="radio" id="fullTime" name="employment" value="fullTime" onChange={handleChange}
                        checked={formData.employment === "fullTime"}
                        />
                        <label htmlFor="fullTime">FullTime</label>
                    </div>
                    
                    {/* ------------Select box Options ------------- */}
                    <br/>

                    <select id="favColor" name="favColor" onChange={handleChange} value={formData.favColor}>
                        <option value="Choose">--Choose--</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                </fieldset>
                <br/>
                <br/>
                <button>Submit</button>

            </form>
            <p>firstName: {formData.firstName}</p>
            <p>lastName: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <p>employment: {formData.employment}</p>
            <p>favColor: {formData.favColor}</p>




        </div>
        )
    }
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)