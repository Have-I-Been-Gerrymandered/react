import React from 'react';

import { Row, Col } from 'antd';

import ProfileCard from './ProfileCard';


// Creates AboutUs page and calls ProfileCard component for each team member.
function DesignAbout() {
    var paragraph = "";
    var back = "Backend Developer";
    var front = "Frontend Developer";
    var year = "Class of 2023";
    var younger_year = "Class of 2024";
    
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
                        <ProfileCard name="Sam" end={front} year={year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                        <ProfileCard name="Keerti" end={front} year={year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                    <ProfileCard name="Josh" end={front} year={year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                    <ProfileCard name="Mason" end={front} year={year} src="./CT.png"/>
                    </Col>
                    <Col span={4}>
                    <ProfileCard name="Henry" end={front} year={year} src="./CT.png"/>
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
                    <p>{paragraph}</p>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                </Col>
            </Row>
        </>
    );
}

export default DesignAbout;