import React from 'react';

//renders the footer and the buttons
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>&copy; Alex Irizarry 2017 &nbsp; &nbsp;
          <a id="linkedin" style={{outline: 0}} role="button">
            <img height="20" width="20" src={require(`./images/linkedin.png`)}/></a><span> </span>
          <a id="gHub" style={{outline: 0}} role="button">
            <img height="20" width="20" src={require(`./images/github.png`)}/></a><span> </span>
          <a id="stackO" style={{outline: 0}} role="button">
            <img height="20" width="20" src={require(`./images/stack.png`)}/></a>
        </p>
      </footer>
    );
  }
}
