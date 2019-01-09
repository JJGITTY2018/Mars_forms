import React, { Component } from "react";
import Countries from "../country.js";

class Forms extends Component {
  constructor() {
    super();
  }
  createOption = props => {
    // let select = [];
    let options = [];
    for (let i = 0; i < Countries.length; i++) {
      options.push(<option key={i}>{Countries[i].name}</option>);
    }

    // select.push(
    //   <select name="country" value="USA">
    //     {options}
    //   </select>
    // );
    // console.log(Countries[1].code); // First Country
    // console.log(options)
    return options;
  };

  clickSubmit() {
    console.log("AAA");
  }

  handleChange(event) {
    console.log("BBB");
  }

  render() {
    return (
      <div>
        <form onClick={this.clickSubmit}>
          <h1> Sign Up for Your Mars Trip!</h1>
          <label htmlFor="name">Full Name: </label>
          <input
            onChange={this.handleChange}
            placeholder="Full Name"
            name="name"
          />
          <br />
          <label htmlFor="birthday">Birthday: </label>
          <input
            onChange={this.handleChange}
            type="date"
            name="birthday"
            defaultValue="01/24/1989"
          />
          <br />
          <label htmlFor="birthPlace">Country Of Origin: </label>
          <select name="country">{this.createOption()}</select>
          <br />
          <label htmlFor="diet">Diet: </label>
          <select name="diet">
            <option>Omnivore</option>
            <option>Vegetarian</option>
            <option>Vegan</option>
          </select>
          <p>Why do you want to go to Mars? </p>
          <input
            onChange={this.handleChange}
            name="narrative"
            placeholder="Because I want to be alone from people"
          />
          <br />
        </form>
      </div>
    );
  }
}

export default Forms;
