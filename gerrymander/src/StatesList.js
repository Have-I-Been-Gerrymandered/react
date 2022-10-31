import React, { Component } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

class USState {
    constructor(stateName, stateCode) {
      this.stateName = stateName;
      this.stateCode = stateCode;
    }
  
    getStateName() {
      return this.stateName;
    }
  
    getStateCode() {
      return this.stateCode;
    }
  
    setStateName(newName) {
      this.stateName = newName;
    }
  
    setStateCode(newCode) {
      this.stateCode = newCode;
    }
  }
  
  function printStateList() {
    const stateList = getStateList();
    for (var x = 0; x < stateList.length; x++) {
      console.log(stateList[x].getStateName() + " [" + stateList[x].getStateCode() + "]");
    }
  }
  
  function getStateList() {
    var alaska = new USState("Alaska", "AK");
    var alabama = new USState("Alabama", "AL");
    var arkansas = new USState("Arkansas", "AR");
    var arizona = new USState("Arizona", "AZ");
    var california = new USState("California", "CA");
    var colorado = new USState("Colorado", "CO");
    var connecticut = new USState("Connecticut", "CT");
    var dc = new USState("District of Columbia", "DC");
    var delaware = new USState("Delaware", "DE");
    var florida = new USState("Florida", "FL");
    var georgia = new USState("Georgia", "GA");
    var hawaii = new USState("Hawaii", "HI");
    var iowa = new USState("Iowa", "IA");
    var idaho = new USState("Idaho", "ID");
    var illinois = new USState("Illinois", "IL");
    var indiana = new USState("Indiana", "IN");
    var kansas = new USState("Kansas", "KS");
    var kentucky = new USState("Kentucky", "KY");
    var louisiana = new USState("Louisiana", "LA");
    var massachusetts = new USState("Massachusetts", "MA");
    var maryland = new USState("Maryland", "MD");
    var maine = new USState("Maine", "ME");
    var michigan = new USState("Michigan", "MI");
    var minnesota = new USState("Minnesota", "MN");
    var missouri = new USState("Missouri", "MO");
    var mississippi = new USState("Mississippi", "MS");
    var montana = new USState("Montana", "MT");
    var northcarolina = new USState("North Carolina", "NC");
    var northdakota = new USState("North Dakota", "ND");
    var nebraska = new USState("Nebraska", "NE");
    var newhampshire = new USState("New Hampshire", "NH");
    var newjersey = new USState("New Jersey", "NJ");
    var newmexico = new USState("New Mexico", "NM");
    var nevada = new USState("Nevada", "NV");
    var newyork = new USState("New York", "NY");
    var ohio = new USState("Ohio", "OH");
    var oklahoma = new USState("Oklahoma", "OK");
    var oregon = new USState("Oregon", "OR");
    var pennsylvania = new USState("Pennsylvania", "PA");
    var rhodeisland = new USState("Rhode Island", "RI");
    var southcarolina = new USState("South Carolina", "SC");
    var southdakota = new USState("South Dakota", "SD");
    var tennessee = new USState("Tennessee", "TN");
    var texas = new USState("Texas", "TX");
    var utah = new USState("Utah", "UT");
    var virginia = new USState("Virginia", "VA");
    var vermont = new USState("Vermont", "VT");
    var washington = new USState("Washington", "WA");
    var wisconsin = new USState("Wisconsin", "WI");
    var westvirginia = new USState("West Virginia", "WV");
    var wyoming = new USState("Wyoming", "WY");
  
    return [alaska, alabama, arkansas, arizona, california, colorado, connecticut, dc, delaware, 
    florida, georgia, hawaii, iowa, idaho, illinois, indiana, kansas, kentucky, louisiana, 
    massachusetts, maryland, maine, michigan, minnesota, missouri, mississippi, montana,
    northcarolina, northdakota, nebraska, newhampshire, newjersey, newmexico, nevada, 
    newyork, ohio, oklahoma, oregon, pennsylvania, rhodeisland, southcarolina, southdakota,
    tennessee, texas, utah, virginia, vermont, washington, wisconsin, westvirginia, wyoming];
  }
  
  printStateList();
  
  console.log(getStateList()[0]);

  
class StatesList extends Component {
    render() {
        let menuItems = [];
        for (var x = 0; x < getStateList().length; x++) {
            menuItems.push(<option value={getStateList()[x].getStateCode()}>{getStateList()[x].getStateName()}</option>)
        }
        return <select class="selector-child">{menuItems}</select>;
    }
}

export default StatesList;