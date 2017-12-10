import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Banner from './components/banner.js';
import About from './components/About.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';

class App extends Component {

  render() {
    

    return (
      <div>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".content"));
