
import React from "react";
import ReactDOM from 'react-dom/client';


//Form Input Text
class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {firstName: '', lastName: 'dd'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        console.log(this.setState)
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value + this.state.lastName)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="firstname" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    LastName:
                    <input type="text" name="lastname" value={this.state.lastName} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}


//Text Area
class EssayForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 'Please write an essay about your favorite DOM element'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('A Essay was submitted: ' + this.state.value)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea placeholder={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

//Drop down list
class DropDown extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event){
        console.log(this.state, 'before')
        this.setState({value: event.target.value})
        console.log(this.state, 'after')
    }

    handleSubmit(event){
        alert('A Essay was submitted: ' + this.state.value)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Pick your Favorite flavor:
                <select  value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grape fruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}
export default function App(){

    return(
            <div>
                <NameForm/>
                <EssayForm/>
                <DropDown/>
            </div>
        )
    }
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)