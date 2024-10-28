import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
/*import Resume from './Components/Resume';*/

import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="App">
          <Header/>
          <About/>
          <Footer/>
      </div>
    );
  }
}

export default App;