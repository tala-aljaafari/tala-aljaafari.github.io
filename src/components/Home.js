import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }
  render() {
    return (
      <div className="Home">
          <Header />
          <About />
          <Footer />
      </div>
    );
  }
}

export default Home;