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
            <div class="App">
                <USAMap onClick={this.mapHandler} />
            </div>
        );
    }
}

// todo: Fill out red and blue states, either manually or a function
// probably not
export default App;