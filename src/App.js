import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Select from 'react-select';
//import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';


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

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: '',
      name: '',
      district: 0
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
  }

  handleSubmit(e){
    isDistrictSelected=true;
    this.setState({district:e.value});
  }

  componentDidMount(){
      this.getOptions()
  }


  changeDistrict(event){
    isDistrictSelected = true;
    this.setState({district: event.target.value});
  }
  mapHandler = (event) => {
    this.setState({id:event.target.dataset.name, name:getStateNameById(event.target.dataset.name)});
    isStateSelected = true;
    isDistrictSelected = true;
    //this.handleChange.bind(stateObject);
    //alert(event.target.dataset.name);
};

  render() {
    //console.log(this.state.selectOptions)
    return (
      <div class="App">
        <h1 class="title">Have I been Gerrymandered?</h1>
        <b class={"selector-child"}> Choose Your State! </b>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
        <div class={"selector-class"}>
        <a href="https://www.house.gov/representatives/find-your-representative">
            <button> Find my District</button>
        </a>
  
      </div>
        
        { isStateSelected ? (
             <img src={this.state.id ? require('./district-maps/' + this.state.id + '.png') : ''} alt = '' /> 
    
        ) : ( <USAMap onClick={this.mapHandler} />)}
        <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
        
        <form hidden = "true" id="district-button" >
          <label>
        <label htmlFor="district-number-label">Enter District</label>
        <input type="text" id="district-number" name="district-number" district={this.state.district} onChange = {this.changeDistrict.bind(this)}/>
        </label>
        
        </form>
        
        {isDistrictSelected && this.state.district != 0 ? (
          <h1>{this.state.id} District {this.state.district}: { Math.floor(Math.random() * (100) )}%</h1>

        ): <i></i>
        }
       
      </div>
    );
  }
}

// todo: Fill out red and blue states, either manually or a function
// probably not?
export default App;
