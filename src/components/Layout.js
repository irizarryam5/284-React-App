import React from 'react';
import Header from './Header'
import Wrapper from './Wrapper'
import Content1 from './Content1'
import Content2 from './Content2'
import Footer from './Footer'

//aggregates all the components
export default class Layout extends React.Component {
  render() {
    return (
      <div className="wrap">
        <Header />
        <h2 className="banner">2017-2018 NBA Picks</h2>
        <Wrapper />
        <Content1 />
        <Content2 />
        <Footer />
      </div>
    );
  }
}
