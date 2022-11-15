import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Select from 'react-select';
//import Dropdown from 'react-bootstrap/Dropdown';
import './searchDistrict.css';
import DesignAbout from './DesignAbout.js';

let isStateSelected = false;
let isDistrictSelected = false;


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

function isDistrictValid(state, district) {
  isDistrictSelected = false;
    const states = {"AL":7,"AK":1,"AZ":9,"AR":4,"CA":53,"CO":7,"CT":5,
        "DE":1,"DC":1,"FL":27,"GA":14,"HI":2,"ID":2,"IL":18,"IN":9,"IA":4,
        "KS":4,"KY":6,"LA":6,"ME":2,"MD":8,"MA":9,"MI":14,
        "MN":8,"MS":4,"MO":8,"MT":1,"NE":3,"NV":4,"NH":2,
        "NJ":12,"NM":3,"NY":27,"NC":13,"ND":1,"OH":16,"OK":5,
        "OR":5,"PA":18,"PR":1, "RI":2,"SC":7,"SD":1,"TN":9,"TX":36,
        "UT":4,"VT":1,"VA":11,"WA":10,"WV":3,"WI":1,"WY":1};

    // console.log("state is", state, "and district is", district)

    if (isNaN(district)) {
      return false;
    }

    if (district > states[state]) {
      return false;
    }

    isDistrictSelected = true;
    return true;

    /*
    const largest_district = states[state];
    // console.log("num of districts is", largest_district);
    // is definitely an int here, make sure is a valid district
    if (district >= 1 && district <= largest_district && (district % 1 === 0)){
        const btn = document.getElementById("breakdown-button");
        btn.hidden = false;
        return true;
    }
    else{
        return false;
    }*/
}

class searchDistrict extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: '',
      name: '',
      district: 0,
      viewBreakdown: false
    }
  }

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

  handleChange(e) {
    console.log(e);
    isStateSelected = true;
    this.setState({id:e.value, name:e.label});
    const btn = document.getElementById("district-button");
    btn.hidden = false;
    document.getElementById("district-area").style.display = "block";
  }

  /*
  handleSubmit(e){
    isDistrictSelected=true;
    this.setState({district:e.value});
  }*/

  componentDidMount(){
      this.getOptions()
  }

  showBreakdown(){
    if (!isDistrictValid(this.state.id, this.state.district)) {
      alert("Invalid district! [" + this.state.id + " " + this.state.district + "]");
      return;
    }
    //Need to get JSON data 
    alert(`Breakdown \n
    Democratic votes: \n
    Republican votes: \n
    Total Votes: \n
    Democratic Wasted: \n
    Republican Wasted: \n`);
  }

  changeDistrict(event){
    //isDistrictSelected = true;
    this.setState({district: event.target.value});
    
    //alert(event.target.value);
    //this.state.district = event.target.value;
  }
 
  mapHandler = (event) => {
    const btn = document.getElementById("district-button");
    btn.hidden = false;
    this.setState({id:event.target.dataset.name, name:getStateNameById(event.target.dataset.name)});
    isStateSelected = true;
    document.getElementById("district-area").style.display = "block";
    //isDistrictSelected = true;
    //this.handleChange.bind(stateObject);
    //alert(event.target.dataset.name);
};

  render() {
    //console.log(this.state.selectOptions)
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
        <a href="https://www.house.gov/representatives/find-your-representative" target="_blank">
            <button class="cool-styled-btn"> What district am I in?</button>
        </a>
      </div>
      <hr></hr>
        
        { isStateSelected ? (
             <img src={this.state.id ? require('./' + this.state.id + '.png') : ''} alt = '' /> 
    
        ) : ( <USAMap onClick={this.mapHandler} />)}
        
        <form hidden = {true} id="district-button" >
          <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
          <label>
            <label htmlFor="district-number-label">Enter District: </label>
            <input onChange={this.changeDistrict.bind(this)} type="text" id="district-number" name="district-number" district={this.state.district} />
          </label>
        </form>

        <div hidden = {true} id="district-area">
          <button class="cool-styled-btn" id="breakdown-button" onClick={this.showBreakdown.bind(this)}> View District Breakdown </button>

          <h1>{this.state.id} District {this.state.district}: { "Score" }</h1>
        </div>
        
      </div>
    );
  }
}




export default searchDistrict;

/*
        {isDistrictSelected && isDistrictValid(this.state.id, this.state.district) && this.state.district !== 0 ? (
          <h1>{this.state.id} District {this.state.district}: { Math.floor(Math.random() * (100) )}%</h1>
          
        ): <i></i>
        }
        onChange = {this.changeDistrict.bind(this)}
*/