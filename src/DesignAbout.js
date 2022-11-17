import React from 'react';

import { Row, Col } from 'antd';

import ProfileCard from './ProfileCard';

// Creates AboutUs page and calls ProfileCard component for each team member.
function DesignAbout() {
    var paragraph = "Have I Been Gerrymandered? is a web tool with the purpose of showing voters how gerrymandered their district is. Currently, it is difficult for voters to determine "
    + "whether their own districts are gerrymandered, our tool will give districts a “score” that will represent how gerrymandered their district is based on specific metrics. " 
    + "These metrics will be determined based on the vast amount of research available in the field. Our team will be utilizing an agile development process with one week sprints. "
    + "Additionally we will use a variety of technologies including React.js, Python, and Github. We will start by defining necessary features, then move to discussing design ideas in "
    + "relation to both the back and front end, next we will follow with testing the features written. Finally, we will deploy the code written, with the goal of each iteration to create "
    + " usable code. We plan to continue utilizing this cycle to create a more nuanced tool throughout project development. As stated we plan to utilize one week sprints, primarily focusing "
    + "on the algorithm-based calculation that determines a “score” in the beginning of our development. We will then move to development of the web tool and the integration of our algorithm "
    + "with the tool. Through analysis of the risks of the project, we have determined that the most significant relate to lack of experience and the calculation of the metrics that will "
    + "determine how gerrymandered a district is.";
    var back = "Backend Developer";
    var front = "Frontend Developer";
    var year = "Class of 2023";
    var younger_year = "Class of 2024";
    
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
                    <p>{paragraph}</p>
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
            <ProfileCard name="Sam" end={front} year={year} src="./CT.png" />
            <ProfileCard name="Keerti" end={front} year={year} src="./CT.png" />
            <ProfileCard name="Josh" end={front} year={year} src="./CT.png" />
            <ProfileCard name="Mason" end={front} year={year} src="./CT.png" />
            <ProfileCard name="Henry" end={front} year={year} src="./CT.png" />

    
            </div>
        </>
    );
}

export default DesignAbout;