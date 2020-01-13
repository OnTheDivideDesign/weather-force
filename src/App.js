import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Weather from './components/Weather';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
