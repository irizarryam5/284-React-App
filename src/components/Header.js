import React from 'react';
//renders the ticker
export default class Header extends React.Component {
  render() {
    return (
      <div className="hider">
  			<h1 className="marquee">
  				<span className="over"><span id="pos0"></span
            ><img id="img0" className="tick up"/><span id="num0"></span></span
  				><span className="over"><span id="pos1"></span
            ><img id="img1" className="tick up"/><span id="num1"></span></span
  				><span className="over"><span id="pos2"></span
            ><img id="img2" className="tick up"/><span id="num2"></span></span
  				><span className="over"><span id="pos3"></span
            ><img id="img3" className="tick up"/><span id="num3"></span></span
  				><span className="over"><span id="pos4"></span
            ><img id="img4" className="tick up"/><span id="num4"></span></span
  				><span className="over"><span id="pos5"></span
            ><img id="img5" className="tick up"/><span id="num5"></span></span
  				><span className="over"><span id="pos6"></span
            ><img id="img6" className="tick up"/><span id="num6"></span></span
  				><span className="over"><span id="pos7"></span
            ><img id="img7" className="tick up"/><span id="num7"></span></span
  				><span className="over"><span id="pos8"></span
            ><img id="img8" className="tick up"/><span id="num8"></span></span
  				>
  			</h1>
  		</div>
    );
  }
}