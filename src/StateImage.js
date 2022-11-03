import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Select from 'react-select'
//import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

class StatesImage extends Component {
    render() {
        let menuItems = [];
        for (var x = 0; x < /*your state list here*/; x++) {
            menuItems.push(<img src={this.state.id ? require('./' + this.state.id + '.png') : ''} alt = '' className={this.state.id !== /*get state id here*/ ? 'noShowState' : ''} />)
        }
        return {menuItems};
    }
}

export default StateImage;