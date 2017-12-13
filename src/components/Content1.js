import React from 'react';
//renders the first graph
export default class Content1 extends React.Component {
  render() {
    return (
    <div className="content">
			<h2 className="label-title">Picks Over Time</h2>
			<svg id = "svg1" width="1000" height="400"></svg>
		</div>
    );
  }
}
