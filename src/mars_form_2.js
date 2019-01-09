import React, { Component } from "react";
import style from "./styles.css";

class Form2 extends Component {
  constructor() {
    super();
  }

  render() {
    return (<>
    <hr></hr>
      <h2>Section 2</h2>
      <ol>
        
        <li>
          <p>Can you hold your breath underwater longer than 1 minute ? </p>
          <input id="" name="" type="radio" checked="" onChange="" />
          <label> Yes </label>
          <input id="" name="" type="radio" checked="" onChange="" />
          <label> No </label>
        </li>
        
        <li>
          <p>What is your marital status?</p>
          <input type="radio" name="" checked="" onChange="" />
          <label> Married </label>
          <input type="radio" name="" checked="" onChange="" />
          <label> Unmarried </label>
        </li>

        <li>
          <p>When you are in a stressful or difficult situation, how do you most
            frequently react?</p>
            <ul>
              <li><input type="radio" name="" checked="" onChange="" />
                <label> Defeat: I stop confronting the situation.</label></li>
              
              <li><input type="radio" name="" checked="" onChange="" />
                <label> Anger: I become upset at the situation.</label></li>
         
              <li><input type="radio" name="" checked="" onChange="" />
              <label> Resourcefulness: I seek help to confront the situation.</label></li>

              <li><input type="radio" name="" checked="" onChange="" />
                <label> Determination: I continue to confront the situation.</label></li>
            </ul>
        </li>
        
        <li>
          <p> Are you claustrophobic? </p>
          <label><input type="radio" name="" checked="" onChange="" /> Yes </label>
          <label><input type="radio" name="" checked="" onChange="" /> No </label>
          <label><input type="radio" name="" checked="" onChange="" /> I don't know</label>
        </li>

        <li>
          <p> Does your family have a history of (check all that apply): </p>
            <label> Cancer <input type="checkbox" name="" checked="" onChange=""/></label>
            <label> Heart Disease <input type="checkbox" name="" checked="" onChange="" /></label>
            <label> Diabetes <input type="checkbox" name="" checked="" onChange="" /></label>
        </li>

        <li>
          <p>Do you have any... (check all that apply): </p>
            <label> Siblings? <input type="checkbox" name="" checked="" onChange="" /></label>
            <label> Parents? <input type="checkbox" name="" checked="" onChange="" /></label>
            <label> Grandparents? <input type="checkbox" name="" checked="" onChange="" /></label>
        </li>

        <li>
          <p>Check all educational credentials you have received:</p>
          <ul>
            <li><input type="checkbox" name="" checked="" onChange="" /> High school diploma or GED equivalent </li>

            <li><input type="checkbox" name="" checked="" onChange="" /> Associate's Degree </li>

            <li><input type="checkbox" name="" checked="" onChange="" /> Bachelor's Degree </li>

            <li><input type="checkbox" name="" checked="" onChange="" /> Master's Degree </li>

            <li><input type="checkbox" name="" checked="" onChange="" /> PhD 
            </li>

          </ul>
          
        <li>
          <p>Why do you want to go to Mars?</p>
          <textarea></textarea>
          
        </li>
        
        </li>
      </ol>
      </>
    );
  }
}

export default Form2;
