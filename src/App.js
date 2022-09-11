import React, { Component } from "react";

import PersonalInfo from "./Components/PersonalInfo";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Career from "./Components/Career";

import './Styles/helper.css'

class App extends Component {

  render() {
    return (
      <div>
        <PersonalInfo />
        <AboutMe />
        <Skills />
        <Projects />
        <Career />
      </div>
    );
  }
  
}

export default App;
