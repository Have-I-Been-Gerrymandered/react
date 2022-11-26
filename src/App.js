import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import DesignAbout from './DesignAbout';
import Navbar from './navigationBar';
import SearchDistrict from './searchDistrict';
import Algorithm from './Algorithm'
import './App.css';
import './navigationBar.css'

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

export default App;