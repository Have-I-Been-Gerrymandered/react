import React, { Component } from 'react';
import USAMap from "react-usa-map";
//import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

class App extends Component {
    /* mandatory */
    mapHandler = (event) => {
        alert(event.target.dataset.name);
    };

    render() {
        return (
            <div className="App" style = {{textAlign: "center"}}>
                <h1>Have I been Gerrymandered?</h1>
                <USAMap onClick={this.mapHandler} />
            </div>
        );
    }
}

//todo: Fill out red and blue states, either manually or a function?

export default App;