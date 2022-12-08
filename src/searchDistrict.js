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

    this.getDistrictNums(e.value);

  }

  getDistrictNums(statedists) {
    const dists = []
    const maxdists = [{"AL":7},{"AK":1},{"AZ":9},{"AR":4},{"CA":53},{"CO":7},{"CT":5},
    {"DE":1},{"DC":1},{"FL":27},{"GA":14},{"HI":2},{"ID":2},{"IL":18},{"IN":9},{"IA":4},
    {"KS":4},{"KY":6},{"LA":6},{"ME":2},{"MD":8},{"MA":9},{"MI":14},
    {"MN":8},{"MS":4},{"MO":8},{"MT":1},{"NE":3},{"NV":4},{"NH":2},
    {"NJ":12},{"NM":3},{"NY":27},{"NC":13},{"ND":1},{"OH":16},{"OK":5},
    {"OR":5},{"PA":18},{"PR":1}, {"RI":2},{"SC":7},{"SD":1},{"TN":9},{"TX":36},
    {"UT":4},{"VT":1},{"VA":11},{"WA":10},{"WV":3},{"WI":1},{"WY":1}];

    const getByKey = (maxdists,key) => (maxdists.find(x => Object.keys(x)[0] === key) || {})[key]
    var max = getByKey(maxdists,statedists);
    for (var x = 1; x <= max; x++) {
      dists[x] = ({value: x, label: x});
    }
    this.state.districts = dists;
  }

  componentDidMount(){
      this.getOptions()
  }

  // Reads the JSON for the given state
  readJSON(stateId){
   var data = require('./data/US.json');
   // Loop through json
   for(var i = 0; i< data.length; i++) {
     var obj = data[i];
     // If state found 
     if (obj.State.toLowerCase() == this.state.name.toLowerCase() && obj.District == this.state.district){
       const breakdown = document.getElementById("breakdown-area");
       breakdown.hidden = false;
       
       if (obj.AdvPercentile < 33) {
        document.getElementById("score-area").style.border = "2px solid green";
        document.getElementById("score-area").style.background = "#bdffbf";
        document.getElementById("rating").innerHTML = "Fair";
        document.getElementById("rating").style.color = "green";
       } else if (obj.AdvPercentile >= 33 && obj.AdvPercentile < 50) {
        document.getElementById("score-area").style.border = "2px solid yellow";
        document.getElementById("score-area").style.background = "#f8ffc2";
        document.getElementById("rating").innerHTML = "Somewhat fair";
        document.getElementById("rating").style.color = "#e6be3c";
       } else if (obj.AdvPercentile >= 50 && obj.AdvPercentile < 66) {
        document.getElementById("score-area").style.border = "2px solid orange";
        document.getElementById("score-area").style.background = "#ffdfc2";
        document.getElementById("rating").innerHTML = "Somewhat unfair";
        document.getElementById("rating").style.color = "orange";
       } else {
        document.getElementById("score-area").style.border = "2px solid red";
        document.getElementById("score-area").style.background = "#ffa1a1";
        document.getElementById("rating").innerHTML = "Highly unfair";
        document.getElementById("rating").style.color = "red";  
       }
       
       document.getElementById("score").innerHTML = "Score: " + obj.AdvPercentile;
       document.getElementById("dem-votes").innerHTML = "Democratic Votes: " + obj.DemVotes;
       document.getElementById("rep-votes").innerHTML = "Republican Votes: " + obj.RepVotes;
       document.getElementById("eff-gap").innerHTML = "Efficiency Gap: " + obj.EffGap;
       document.getElementById("adv-eff-gap").innerHTML = "Advanced Efficiency Gap: " + obj.AdvEffGap;
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
  changeDistrict(event) {
    this.setState({district: event.value});
    const breakdown = document.getElementById("breakdown-area");
    breakdown.hidden = true;
  }
 
  // Show or hide the gerrymandering definition
  showInfo() {
    const elem = document.getElementById("p-reveal");
    if (elem.hidden) {
      elem.hidden = false;
    } else {
      elem.hidden = true;
    }
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
    this.getDistrictNums(event.target.dataset.name);
};

  render() {
    return (
      <div class="searchDistrict">
        <div class="top-link">
           <a href="https://have-i-been-gerrymandered.github.io/react/" class="title">Have I Been Gerrymandered?</a>
        </div>
        <p>An online tool to discover how fair your district is.</p>
        <p id="what-is-gerrymandering" onClick={this.showInfo}>What is Gerrymandering?</p>
        <p id="p-reveal" hidden = {true}>Gerrymandering is the act of changing district boundaries to gain more votes for a political party/group.</p>
        <div id="state-select-div">
           <b class={"selector-child"}> Choose Your State</b>
           <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
        </div>
        <div class={"selector-class"}>
      </div>
      
        { isStateSelected ? (
             <img id="district-map-img" src={this.state.id ? require('./district-maps/' + this.state.id + '.png') : ''} alt = '' /> 
    
        ) : ( <USAMap onClick={this.mapHandler} />)}
        <form hidden = {true} id="district-button" >
          <p>You have selected <strong>{this.state.name} </strong><strong>({this.state.id})</strong></p>
          <div id="dist-select-div">
            <Select id="select-dist" placeholder="District..." options={this.state.districts} onChange={this.changeDistrict.bind(this)} />
          </div>
        </form>
        <a id="find-district" hidden={true} href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noopener noreferrer">
            <button class="cool-styled-btn"> What district am I in?</button>
        </a>
        <div hidden = {true} id="district-area">
          <button class="cool-styled-btn" id="breakdown-button" onClick={this.showBreakdown.bind(this)}> View District Score </button> 
        </div>
        <div hidden = {true} id="breakdown-area">
        <h1>{this.state.id} District {this.state.district}</h1>
          <div id="score-area">
            <p id="rating"></p>
            <b id="score"></b>
            <p id="dem-votes"></p>
            <p id="rep-votes"></p>
            <p id="eff-gap"></p>
            <p id="adv-eff-gap"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default searchDistrict;
