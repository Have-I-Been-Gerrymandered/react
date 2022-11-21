import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ProfileCard from './ProfileCard';
import './designAbout.css';
import CTimg from './district-maps/CT.png';
import Keerti from './Keerti.jpg';
import Sam from './Sam.jpg';
import Henry from './Henry.jpg';
import Josh from './Josh.png';
import Mason from './Mason.jpg';


// Creates AboutUs page and calls ProfileCard component for each team member.
class DesignAbout extends Component{
    constructor(props){
        super(props)
        this.state = {
          paragraph: "Have I Been Gerrymandered? is a web tool with the purpose of showing voters how gerrymandered their district is. Currently, it is difficult for voters to determine "
          + "whether their own districts are gerrymandered, our tool will give districts a “score” that will represent how gerrymandered their district is based on specific metrics. " 
          + "These metrics will be determined based on the vast amount of research available in the field. Our team will be utilizing an agile development process with one week sprints. "
          + "Additionally we will use a variety of technologies including React.js, Python, and Github. We will start by defining necessary features, then move to discussing design ideas in "
          + "relation to both the back and front end, next we will follow with testing the features written. Finally, we will deploy the code written, with the goal of each iteration to create "
          + " usable code. We plan to continue utilizing this cycle to create a more nuanced tool throughout project development. As stated we plan to utilize one week sprints, primarily focusing "
          + "on the algorithm-based calculation that determines a “score” in the beginning of our development. We will then move to development of the web tool and the integration of our algorithm "
          + "with the tool. Through analysis of the risks of the project, we have determined that the most significant relate to lack of experience and the calculation of the metrics that will "
          + "determine how gerrymandered a district is.",
          back: "Backend Developer",
          front: "Frontend Developer",
          year: "Class of 2023",
          younger_year: "Class of 2024"
        }
    }

    render(){
        return (
            <>
                <div class="slant">
                <Row>
                    <Col>
                        <h2>OUR STORY</h2>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <p>{this.state.paragraph}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 id="creators-title">OUR CREATORS</h2>
                    </Col>
                </Row>
                <div class="box">
                    <div><ProfileCard name="Sam West" end={this.state.front} year={this.state.year} src={Sam} /></div>
                    <div><ProfileCard name="Keerti Sundaram" end={this.state.front} year={this.state.year} src={Keerti} /></div>
                    <div><ProfileCard name="Josh Marion" end={this.state.front} year={this.state.younger_year} src={Josh} /> </div>
                </div>
                <div class="box">
                    <div><ProfileCard name="Henry Jack" end={this.state.front} year={this.state.younger_year} src={Henry} /> </div>
                    <div><ProfileCard name="Mason DuBoef" end={this.state.back} year={this.state.year} src={Mason} /> </div>
                </div>
                </div>
            </>
        );
    }
}

export default DesignAbout;