import React, { Component } from 'react';

//Creates the Our algorithm page featuring information about our algorithm and our github link
class Algorithm extends Component{
    constructor(props){
        super(props)
        this.state = {
          paragraph: "Two strategies exist to gerrymander a district. When confronted with a group of opposition voters Gerrymandering lawmakers can choose to either \"pack\" or \"crack\" the area housing those opposition voters. Packing districts entails drawing a district around as many densely packed opposition voters as possible. This produces one large district which will be won by the opposition by a wide margin. However, by packing so many opposition votes into one district you grant yourself an advantage in the surrounding districts where opposition votes have been removed and placed into a single packed district." +
          
          "An excellent example of a packed district is Alabamas 7th District which spans two major cities and encircles a large area of Democrat-voting African Americans. It is bright blue, consuming many Democrat votes in the state of Alabama and making it nearly impossible for Democrats to win more than one district considering so many Democratic votes are wasted in the uncompetitive District 7 race." +
          
          "When faced with an area full of opposition voters the other strategy would be to crack the district. Divide the area into a number of slices and assign each slice to a district you expect to win comfortably. By spreading out opposition voters it can be possible not to concede a single district despite a considerable opposition voting block.  If you crack a prospective opposition district their votes will be wasted by being spread among uncompetitive races instead of a district where their votes could be decisive." +
          
          "Cracked districts can be harder to see, looking only at election outcomes but Georgia districts 6 and 7 are a good example, showing Atlanta, a Democrat-voting city, being cracked into multiple districts many of which are winnable for Republicans." +
          
          "We grade districts by using our algorithm based on the Efficiency Gap method. Our algorithm utilizes only electoral data, not taking into account geographic or demographic data which can potentially help in identifying instances of gerrymandering. For each party we attempt to count the number of votes that could be considered \"wasted\" for each party. From there an efficiency gap score can be calculated. The score is equal to the difference in wasted votes between Republicans and Democrats divided by the total number of votes. If there is a large discrepancy with one party having far more wasted votes than the other then, the district will be given a high efficiency gap score. If both parties wasted a similar number of votes then the efficiency gap score will be low. Once efficiency gap scores have been calculated for every district they are each assigned a number 0 to 100 that corresponds to their percentile rank (ie. how high their efficiency gap score is relative to other districts). Percentile rank is the main metric shown to users with a high number implying a high likelihood of gerrymandering. " +
          
          "How specific votes are determined to be \"wasted\" has a great impact on our result. We employ two different methods to determine how many votes are wasted in a district. These two methods will result in two different scores for the same districts." +
          
          "The first and more basic method is laid out in the classical implementation of the Efficiency Gap method. For the losing party, all votes are considered wasted. For the winning party all votes not needed to win the election are considered wasted. The non-wasted vote count is equal to the votes for the losing party plus one. The remaining votes for the winning party are considered wasted. While simple and elegant this approach does have a number of flaws. In the case of a very tight election with a slim margin of victory the losing party will have many wasted votes while the winning party hardly registers any. However, the losing party’s votes could hardly be considered wasted considering a few more votes would have flipped the district. Those votes were not wasted, they made the election competitive." +
          
          "Our second metric for counting wasted votes, called \"Advanced Efficiency Gap\", aims to resolve some of these issues with the classical Efficiency Gap Method. The improved method is largely inspired by a 2017 mathematics & statistics paper entitled Quantifying gerrymandering using the vote distribution by George Warrington of the University of Vermont. Instead of treating the wasted-ness of a vote as binary, either wasted or non-wasted, this method treats electoral results as two ordered sets of votes, one for either party, and assigns a wastefulness value (between 0 and 1) to each vote. The 50% of the votes required for the winning party to win are counted as fully unwasted, 0. The remaining votes are assigned a variable amount of wastefulness depending on their position in the ordered list of votes. For the winning party’s surplus votes the first of the ordered votes are counted as having a lower level of wastefulness than the later votes that make the election more of a blowout than a competitive affair. For the losing party, if the party was close to 50% of total votes, all its votes will be assigned a low wastefulness value. However, instances where the party lost by a comfortable margin but not by a blowout, (around 35% of the vote) wastefulness is high. This margin for victory is ideal for the victor. Not too high that they are wasting votes in an uncompetitive district but not too low that the result might have flipped by unpredictable factors. Districts in this range may have been cracked and receive a high gerrymandering score, higher than then if calculated by classical efficiency gap. On the other hand, very tight toss up elections are likely to have a very high score with classical efficiency gap but very low with advanced efficiency gap."
          
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