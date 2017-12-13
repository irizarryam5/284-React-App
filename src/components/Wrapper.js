import React from 'react';
//renders the stat blocks
export default class Wrapper extends React.Component {
  render() {
    return (
      <div className = "wrapper">
        <div className = "statBlock">
  				<div className="statIconBottom red"><div className="statIconTop">
          <img className="profpic" src={require(`./images/profpic.png`)} height="55px"/></div
  				></div>
  				<br/><h3 className="personLabel">Alex</h3>
  				<div className="collapser">
  					<hr className="hrLine"/>
  					<h3 className="personLabel">Picks: <span id="pickNo0" className="personData">14</span
  					><br/>Points: <span id="moneyNo0" className="personData">400</span></h3>
  				</div>
  			</div>
  			<div className = "statBlock">
  				<div className="statIconBottom blue"><div className="statIconTop">
          <img className="profpic" src={require(`./images/profpic.png`)} height="55px"/></div
  				></div>
  				<br/><h3 className="personLabel">Amanda</h3>
  				<div className="collapser">
  					<hr className="hrLine"/>
  					<h3 className="personLabel">Picks: <span id="pickNo1" className="personData">14</span
  					><br/>Points: <span id="moneyNo1" className="personData">400</span></h3>
  				</div>
  			</div>
  			<div className = "statBlock">
  				<div className="statIconBottom green"><div className="statIconTop">
          <img className="profpic" src={require(`./images/profpic.png`)} height="55px"/></div
  				></div>
  				<br/><h3 className="personLabel">Antonio</h3>
  				<div className="collapser">
  					<hr className="hrLine"/>
  					<h3 className="personLabel">Picks: <span id="pickNo2" className="personData">14</span
  					><br/>Points: <span id="moneyNo2" className="personData">400</span></h3>
  				</div>
  			</div>
  			<div className = "statBlock">
  				<div className="statIconBottom purple"><div className="statIconTop">
          <img className="profpic" src={require(`./images/profpic.png`)} height="55px"/></div
  				></div>
  				<br/><h3 className="personLabel">Morgan</h3>
  				<div className="collapser">
  					<hr className="hrLine"/>
  					<h3 className="personLabel">Picks: <span id="pickNo3" className="personData">14</span
  					><br/>Points: <span id="moneyNo3" className="personData">400</span></h3>
  				</div>
  			</div>
  			<div className = "statBlock">
  				<div className="statIconBottom orange"><div className="statIconTop">
          <img className="profpic" src={require(`./images/profpic.png`)} height="55px"/></div
  				></div>
  				<br/><h3 className="personLabel">Nick</h3>
  				<div className="collapser">
  					<hr className="hrLine"/>
  					<h3 className="personLabel">Picks: <span id="pickNo4" className="personData">14</span
  					><br/>Points: <span id="moneyNo4" className="personData">400</span></h3>
  				</div>
  			</div>
  			<div className = "statBlock">
  				<div className="statIconBottom yellow"><div className="statIconTop">
          <img className="profpic" src={require(`./images/profpic.png`)} height="55px"/></div
  				></div>
  				<br/><h3 className="personLabel">Will</h3>
  				<div className="collapser">
  					<hr className="hrLine"/>
  					<h3 className="personLabel">Picks: <span id="pickNo5" className="personData">14</span
  					><br/>Points: <span id="moneyNo5" className="personData">400</span></h3>
  				</div>
  			</div>
      </div>
    );
  }
}
