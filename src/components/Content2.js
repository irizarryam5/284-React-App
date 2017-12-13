import React from 'react';

//renders the second graph and the text
export default class Content2 extends React.Component {

  constructor(){
      super();
      this.firstText = "This application has been created to track a friendly basketball wager. Every year FiveThirtyEight comes out with a projected record for all of the teams in the NBA and every year this group of friends tries to decide whether each team will go over or under their projected win line. During the wagering process each participant will decide if the team will go over or under and place a weight (if applicable) on each team. Weights work as follows: each participant is allocated 300 points to distribute amongst the 30 teams; a minimum weight of 10 points can be placed upon a team and a maximum of 40 points can be placed upon a team. It is not required to place a weight on every team however, each participant must distribute all 300 points while abiding by the aforementioned minimum and maximum requirements. For every correct pick, a participant shall be awarded 10 points in addition to the weight that they have placed upon said team (if applicable). There is no penalty for incorrect picks, points simply will not be awarded for the incorrect pick. This application displays each team's status with respect to their line (how many games over or under they are), the current point standings, number of picks correct, and graphs to display everyone's progress over time. The color bubble above each name corresponds to the color of their line on the graphs.";
      this.secondText = "I have set up a RESTful API that executes a python BeautifulSoup script everyday that scrapes the current projected NBA team records from the following URL: ";
      this.thirdText = ".This python script unzips, parses the payload from the URL, then populates an SQL database with each team's projected win and loss data. A Node.js script will then read that data from the database and then create JSON files for the front end to process. The UI for this application is created by utilizing React.js. The front end then makes GET requests to retrieve the JSONs from the back end. The JSON files are used for the scrolling display that contains team progress, for the boxes that contain the current wager standings, and for front end scripts utilizing D3.js to display the graphs of the wager standings over time. This project is hosted on an AWS EC2 instance. Technologies used: Python BeautifulSoup, Node.js, NPM, SQLite, Express, Webpack, Babel, React.js, D3.js, Bootstrap, JQuery, Linux.";
  }
  render() {
    return (
    <div className="content">
			<h2 className="label-title">Points Over Time</h2>
			<svg id = "svg2" width="1000" height="400"></svg>
			<div className="text">
				<h2 className="heading">What is this?</h2>
				<p className="jiberjaber">{this.firstText}</p>
				<h2 className="heading">How does it work?</h2>
				<p className="jiberjaber">{this.secondText}
        <a  id="linker" role="button">https://projects.fivethirtyeight.com/2018-nba-predictions/</a>
        {this.thirdText}</p>
			</div>
		</div>
    );
  }
}
