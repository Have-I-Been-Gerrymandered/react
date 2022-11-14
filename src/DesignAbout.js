
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import ProfileCard from './ProfileCard';

// Creates AboutUs page and calls ProfileCard component for each team member.
class DesignAbout extends Component{
    constructor(props){
        super(props)
        this.state ={
            back: 'Backend Developer',
            front: 'Frontend Developer',
            paragraph: '',
            year: 'Class of 2023',
            younger_year: 'Class of 2024'
    
        }
      
    }
   
    render(){
    return (
        <>
            <div class="slant">
                <Row>
                    <Col>
                        <h2 id="creators-title">OUR CREATORS</h2>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <ProfileCard name="Sam" end={this.state.front} year={this.state.year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                        <ProfileCard name="Keerti" end={this.state.front} year={this.state.year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                    <ProfileCard name="Josh" end={this.state.front} year={this.state.younger_year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                    <ProfileCard name="Mason" end={this.state.back} year={this.state.year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                    <ProfileCard name="Henry" end={this.state.back} year={this.state.younger_year} src="./CT.png"/>
                    </Col>
                </Row>
            </div>
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
        </>
    );
    }
}

export default DesignAbout;