import React, { Component } from "react";
import style from "./styles.css";

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breath: "",
      martial: "",
      reaction: "",
      tight: "",
      status: "",
      cancer: "",
      heart: "",
      sugar: "",
      education: ""
      }


      }

  clickChanges = (event) => {
    console.log(event.target.name === this.state[event.target.id])
    if(!event.target.name === this.state[event.target.id]){
      return false
    }
    else{
      return true
    }

  }
  handleChanges = (event) => {
    this.setState({
      [event.target.id] : event.target.name
  })
  // this.clickChanges(event)
}

handlePickBox = (event) => {
  let id = event.target.id
  let objects = event.target.name
  let state = this.state
  console.log(state[objects])

  if (!state[objects]) {
    this.setState({
      [objects]: true
    })
  } else {
    this.setState({
      [objects]: false
    })
  }
}

clickSubmit = () =>{
  console.log(this.state)
  console.log(this.props.data)
}

  render(){
    return(
    <>
    <hr></hr>
      <h2>Section 2</h2>
      
      <ol>
        
        <li>
          <p>Can you hold your breath underwater longer than 1 minute ? </p>
          <input id="breath" name="yes" type="radio" checked ={this.state.breath === "yes"} onChange={this.handleChanges}/>
          <label> Yes </label>
          <input id="breath" name="no" type="radio" checked ={this.state.breath === "no"} onChange={this.handleChanges} />
          <label> No </label>
        </li>
        
        <li>
          <p>What is your marital status?</p>
          <input id= "martial" type="radio" name="married" checked= {this.state.martial === "married"} onClick={this.handleChanges} />

          <label> Married </label>
          <input id= "martial" type="radio" name="unmarried" checked={this.state.martial === "unmarried"} onClick={this.handleChanges} />
          <label> Unmarried </label>
        </li>

        <li>
          <p>When you are in a stressful or difficult situation, how do you most
            frequently react?</p>
            <ul>
              <li>
              <input type="radio" id = "reaction" name="defeat" checked={this.state.reaction === "defeat"} onClick={this.handleChanges} />
                <label> Defeat: I stop confronting the situation.</label></li>
              
              <li><input type="radio" id = "reaction" name="anger" checked={this.state.reaction === "anger"} onChange={this.handleChanges}/>
                <label> Anger: I become upset at the situation.></label></li>
         
              <li><input type="radio" id = "reaction" name="resourceful" checked= {this.state.reaction === "resourceful"} onChange={this.handleChanges} />
                <label> Resourcefulness: I seek help to confront the situation.</label></li>

              <li><input type="radio" id = "reaction" name="determination" checked={this.state.reaction === "determination"} onChange={this.handleChanges} />
                <label> Determination: I continue to confront the situation.</label></li>
            </ul>
        </li>
        
        <li>
          <p> Are you claustrophobic? </p>
          <label><input id = "tight" type="radio" name="Yes" checked={this.state.tight === "Yes"} onChange={this.handleChanges} /> Yes </label>
          <label><input id = "tight" type="radio" name="No" checked={this.state.tight === "No"} onChange={this.handleChanges} /> No </label>
          <label><input id = "tight" type="radio" name="IDK" checked={this.state.tight === "IDK"} onChange={this.handleChanges} /> I don't know</label>
        </li>

        <li>
          <p> Does your family have a history of ... (check all that apply): </p>
            <label> Cancer <input id = "medical" type="checkbox" name="cancer" checked={this.state.cancer === true}  onClick={this.handlePickBox}/></label>
            
            <label> Heart Diesease <input id = "medical" type="checkbox" name="heart" checked={(this.state.heart === true)} onClick={this.handlePickBox} /></label>
           
            <label> Diabetes <input id = "medical" type="checkbox" name="sugar" 
            checked={(this.state.sugar === true)} onClick={this.handlePickBox} /></label>
        </li>

        <li>
          <p>Do you have any... (check all that apply): </p>
            <label> Siblings? <input type="checkbox" id = "family" name="siblings"  onChange={this.handlePickBox} checked={(this.state.siblings === true)}     /></label>
            <label> Parents? <input type="checkbox" id = "family" name="parents"  onChange={this.handlePickBox} checked={(this.state.parents === true)}     /></label>
            <label> Grandparents? <input type="checkbox" id = "family" name="grans"  onChange={this.handlePickBox} checked={(this.state.grans === true)}     /></label>
        </li>

        <li>
          <p>Check all educational credentials you have received:</p>
          <ul>
            <li><input type="checkbox" id="education" name="highschool" onChange={this.handlePickBox} checked={(this.state.highschool === true)} /> High school diploma or GED equivalent </li>

            <li><input type="checkbox" id="education" name="associates" onChange={this.handlePickBox} checked={(this.state.associates === true)} /> Associate's Degree </li>

            <li><input type="checkbox" id="education" name="bachelors" onChange={this.handlePickBox} checked={(this.state.bachelors === true)} /> Bachelor's Degree </li>

            <li><input type="checkbox" id="education" name="masters" onChange={this.handlePickBox} checked={(this.state.masters === true)} /> Master's Degree </li>

            <li><input type="checkbox" id="education" name="phd" onChange={this.handlePickBox} checked={(this.state.phd === true)} /> PhD 
            </li>

          </ul>
          </li>
        <li>
          <p>Why do you want to go to Mars?</p>
          <textarea placeholder= "Insert Slot" name= "why" onChange = {this.props.handleChange}></textarea>
        </li>
        
      </ol>

      <button onClick = {this.clickSubmit}> Submit </button>
      </>
    )
  }
}
export default Form2;
