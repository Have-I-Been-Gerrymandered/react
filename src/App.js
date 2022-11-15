import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Select from 'react-select';
import { Route, Routes } from 'react-router-dom';
import DesignAbout from './DesignAbout';
import Navbar from './navigationBar';
import SearchDistrict from './searchDistrict';
import Algorithm from './Algorithm'
//import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';
import './navigationBar.css'

let isStateSelected = false;

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: '',
      name: '',
    }
  }
  render() {
    return (
      <div class="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<SearchDistrict />} />
            <Route path="/home" element={<SearchDistrict />} />
            <Route path="/about" element={<DesignAbout />} />
            <Route path="/our-algorithm" element={<Algorithm />} />
          </Routes>
        </div>
      </div>
    );
  }
}

// todo: Fill out red and blue states, either manually or a function
// probably not
export default App;