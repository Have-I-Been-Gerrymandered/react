import React, { Component } from 'react';

//Creates the Our algorithm page featuring information about our algorithm and our github link
class Algorithm extends Component{
    constructor(props){
        super(props)
        this.state = {
          paragraph: "To assess the presence of gerrymandering, one can consider the shapes of districts or" +
          "the distribution of votes. The efficiency gap, which does the latter, plays a central role in" +
          " a 2016 federal court case on the constitutionality of Wisconsin’s state legislative district" +
          " plan. Unfortunately, however, the efficiency gap reduces to proportional representation, an" +
          " expectation that is not a constitutional right. We present a new measure of partisan asymmetry that does not rely on the shapes of districts, is simple to compute, is provably related" +
          " to the “packing and cracking” integral to gerrymandering, and that avoids the constitutionality issue presented by the efficiency gap. In addition, we introduce a generalization of the" +
          " efficiency gap that also avoids the equivalency to proportional representation. We apply the" +
          " first function to US congressional and state legislative plans from recent decades to identify" +
          " candidate gerrymanders."
        }
    }
render(){
    return(
        <div>
            <h2>OUR ALGORITHM</h2>
            <p>{this.state.paragraph}</p>
            <h2><a href = "https://github.com/Have-I-Been-Gerrymandered" target="_blank" rel="noopener noreferrer"> Our Github</a></h2>
        </div>
    )
}
}
export default Algorithm;