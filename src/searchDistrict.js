import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Select from 'react-select';
import './searchDistrict.css';

//Creates the searchDistrict page
let isStateSelected = false;

// Given a state ID (like CA) returns the state name (like California)
function getStateNameById(stateAbbr) {
  var states = {"AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut",
  "DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa",
  "KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan",
  "MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire",
  "NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma",
  "OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas",
  "UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"};
  console.log(states[stateAbbr]);
  return states[stateAbbr];
}

// Checks if a given state and district number is valid (number is less than 1, not a number,
// or greater than the number of districts in that state)
function isDistrictValid(state, district) {
    const states = {"AL":7,"AK":1,"AZ":9,"AR":4,"CA":53,"CO":7,"CT":5,
        "DE":1,"DC":1,"FL":27,"GA":14,"HI":2,"ID":2,"IL":18,"IN":9,"IA":4,
        "KS":4,"KY":6,"LA":6,"ME":2,"MD":8,"MA":9,"MI":14,
        "MN":8,"MS":4,"MO":8,"MT":1,"NE":3,"NV":4,"NH":2,
        "NJ":12,"NM":3,"NY":27,"NC":13,"ND":1,"OH":16,"OK":5,
        "OR":5,"PA":18,"PR":1, "RI":2,"SC":7,"SD":1,"TN":9,"TX":36,
        "UT":4,"VT":1,"VA":11,"WA":10,"WV":3,"WI":1,"WY":1};

    // Not a number
    if (isNaN(district)) {
      return false;
    }

    // Too high of a number
    if (district > states[state] || district <= 0) {
      return false;
    }

    return true;
}

// Search District component
class searchDistrict extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: '',
      name: '',
      district: 0
    }
  }

  // Sets state abbreviations and names for the map and dropdown
 async getOptions(){
    const states = [
      {value: "AL", label: "Alabama"},
      {value: "AK", label: "Alaska"},
      {value: "AZ", label :  "Arizona"},
      {value: "AR", label :  "Arkansas"},
      {value: "CA", label :  "California"},
      {value: "CO", label :  "Colorado"},
      {value: "CT", label :  "Connecticut"},
      {value: "DE", label :  "Delaware"},
      {value: "DC", label :  "District Of Columbia"},
      {value: "FL", label :  "Florida"},
      {value: "GA", label :  "Georgia"},
      {value: "HI", label :  "Hawaii"},
      {value: "ID", label :  "Idaho"},
      {value: "IL", label :  "Illinois"},
      {value: "IN", label :  "Indiana"},
      {value: "IA", label :  "Iowa"},
      {value: "KS", label :  "Kansas"},
      {value: "KY", label :  "Kentucky"},
      {value: "LA", label :  "Louisiana"},
      {value: "ME", label :  "Maine"},
      {value: "MD", label :  "Maryland"},
      {value: "MA", label :  "Massachusetts"},
      {value: "MI", label :  "Michigan"},
      {value: "MN", label :  "Minnesota"},
      {value: "MS", label :  "Mississippi"},
      {value: "MO", label :  "Missouri"},
      {value: "MT", label :  "Montana"},
      {value: "NE", label :  "Nebraska"},
      {value: "NV", label :  "Nevada"},
      {value: "NH", label :  "New Hampshire"},
      {value: "NJ", label :  "New Jersey"},
      {value: "NM", label :  "New Mexico"},
      {value: "NY", label :  "New York"},
      {value: "NC", label :  "North Carolina"},
      {value: "ND", label :  "North Dakota"},
      {value: "OH", label :  "Ohio"},
      {value: "OK", label :  "Oklahoma"},
      {value: "OR", label :  "Oregon"},
      {value: "PA", label :  "Pennsylvania"},
      {value: "RI", label :  "Rhode Island"},
      {value: "SC", label :  "South Carolina"},
      {value: "SD", label :  "South Dakota"},
      {value: "TN", label :  "Tennessee"},
      {value: "TX", label :  "Texas"},
      {value: "UT", label :  "Utah"},
      {value: "VT", label :  "Vermont"},
      {value: "VA", label :  "Virginia"},
      {value: "WA", label :  "Washington"},
      {value: "WV", label :  "West Virginia"},
      {value: "WI", label :  "Wisconsin"},
      {value: "WY", label :  "Wyoming"}, ];

    this.setState({selectOptions: states})
  }

  // Handles when some buttons are clicked to update the map and score divs
  // This is the handle change for when you use the dropdown
  handleChange(e) {
    console.log(e);
    isStateSelected = true;
    this.setState({id:e.value, name:e.label});
    const btn = document.getElementById("district-button");
    btn.hidden = false;
    const findDistrict = document.getElementById("find-district");
    findDistrict.hidden = false;
    document.getElementById("district-area").style.display = "block";
  }

  componentDidMount(){
      this.getOptions()
  }

  // Reads the JSON for the given state
  readJSON(stateId){
   var data = require('./US.json');
   // Loop through json
   for(var i = 0; i< data.length; i++) {
     var obj = data[i];
     // If state found
     if (obj.State.toLowerCase() == this.state.name.toLowerCase() && obj.District == this.state.district){
       const breakdown = document.getElementById("breakdown-area");
       breakdown.hidden = false;
       document.getElementById("score").innerHTML = "Score: " + obj.Percentile;
       document.getElementById("demVotes").innerHTML = "Democratic Votes: " + obj.DemVotes;
       document.getElementById("repVotes").innerHTML = "Republican Votes: " + obj.RepVotes;
       document.getElementById("effGap").innerHTML = "Efficiency Gap: " + obj.EffGap;
       //document.getElementById("advEffGap").innerHTML = "Advanced Efficiency Gap: " + obj.AdvEffGap;
       window.scrollTo(0, document.body.scrollHeight);
     }
   }
  }

  // Show the score information, or say the district is invalid
  showBreakdown(){
    if (!isDistrictValid(this.state.id, this.state.district)) {
      alert("Invalid district! [" + this.state.id + " " + this.state.district + "]");
      return;
    }
    this.readJSON(this.state.id);
  }

  // Event called when a user inputs a district
  changeDistrict(event){
    this.setState({district: event.target.value});
    const breakdown = document.getElementById("breakdown-area");
    breakdown.hidden = true;
  }
 
  // Handles the map being interacted with
  mapHandler = (event) => {
    const btn = document.getElementById("district-button");
    btn.hidden = false;
    const findDistrict = document.getElementById("find-district");
    findDistrict.hidden = false;
    this.setState({id:event.target.dataset.name, name:getStateNameById(event.target.dataset.name)});
    isStateSelected = true;
    document.getElementById("district-area").style.display = "block";
};

  render() {
    return (
      <div class="searchDistrict">
        <div class="top-link">
           <a href="../" class="title">Have I been Gerrymandered?</a>
        </div>
        <div id="state-select-div">
           <b class={"selector-child"}> Choose Your State</b>
           <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
        </div>
        <div class={"selector-class"}>
      </div>
      <hr></hr>
        { isStateSelected ? (
             <img id="district-map-img" src={this.state.id ? require('./district-maps/' + this.state.id + '.png') : ''} alt = '' /> 
    
        ) : ( <USAMap onClick={this.mapHandler} />)}
        <form hidden = {true} id="district-button" >
          <p>You have selected <strong>{this.state.name} </strong><strong>({this.state.id})</strong></p>
          <label>
            <label htmlFor="district-number-label">Enter District: </label>
            <input onChange={this.changeDistrict.bind(this)} type="text" id="district-number" name="district-number" district={this.state.district} />
          </label>
        </form>
        <a id="find-district" hidden={true} href="https://www.house.gov/representatives/find-your-representative" target="_blank">
            <button class="cool-styled-btn"> What district am I in?</button>
        </a>
        <div hidden = {true} id="district-area">
          <button class="cool-styled-btn" id="breakdown-button" onClick={this.showBreakdown.bind(this)}> View District Score </button> 
        </div>
        <div hidden = {true} id="breakdown-area">
        <h1>{this.state.id} District {this.state.district}</h1>
          <h2 id="score"></h2>
          <p id="demVotes"></p>
          <p id="repVotes"></p>
          <p id="effGap"></p>
          
        </div>
      </div>
    );
  }
}

export default searchDistrict;
 