import React, { Component } from "react";
import Countries from "./country"
import Form2 from "./mars_form_2"

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      birthday: "",
      country: "",
      diet: "",
      complete: false,
    }
  }
  createOption = () => {
    let options = [];
    for (let i = 0; i < Countries.length; i++) {
      options.push(<option key={i}>{Countries[i].name}</option>);
    }
    return options;
  };

  clickSubmit = (event) => {
    event.preventDefault();
    this.setState({
      complete: true
    })
    console.log(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  nextSection = () => {
    if(this.state.complete){
      return <Form2 handleChange = {this.handleChange} data = {this.state}/>
    }
  }

  render() {
    return (
      <>
      <div className= "container">
        <h1>Mars Trip</h1>
          <h2> Section 1 </h2>
        <form onChange={this.handleChange}>
          <label htmlFor="name">Full Name: </label>
          <input
            placeholder="First Name Last Name"
            name="name"
            defaultValue = {
              this.state.name
            }
          />
          <br />
          <label htmlFor="birthday">Birthday: </label>
          <input
            type="date"
            name="birthday"
            defaultValue = {this.state.birthday}
          />
          <br />
          <label htmlFor="country">Country Of Origin: </label>
          <select name="country" defaultValue={this.state.country} >
          <option disabled value = {this.state.country}></option>
          {this.createOption()}</select>
          <br />
          <label htmlFor="diet">Diet: </label>
          <select name = "diet" defaultValue = {this.state.diet}>
            <option disabled value={this.state.diet}></option>
            <option>Omnivore</option>
            <option>Vegetarian</option>
            <option>Vegan</option>
          </select>
          <br></br>
          <button onClick={this.clickSubmit}>Next Section></button>
          <br /> 
        </form>
        {this.nextSection()}
      </div>
      </>
    );
  }
}

export default Forms;
