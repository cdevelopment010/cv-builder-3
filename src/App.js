import React, { Component } from "react";

import PersonalInfo from "./Components/PersonalInfo";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Career from "./Components/Career";
import Education from "./Components/Education";
import References from "./Components/References";

import './Styles/helper.css'; 
import './Styles/cv.css';
import './Styles/mediaQueries.css';

class App extends Component {

  render() {
    return (
      <div className="grid-1-col justify-items-center">
        <div className="cv-container print-area grid-1-col">
          <PersonalInfo />
          <AboutMe />
          <Skills />
          <Projects />
          <Career />
          <Education />
          <References />
          <div className="text-center hr-line pb-2 pt-2">
            <span className="text-success btn-add bg-white" tabIndex="0"><i className="fa-solid fa-circle-plus fa-2x cursor-pointer mt-1" onClick={() => {console.log("add new section!")}}></i></span>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
