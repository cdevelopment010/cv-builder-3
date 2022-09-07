import React, { Component } from "react";

import PersonalInfo from "./Components/PersonalInfo";
import AboutMe from "./Components/AboutMe";
import './Styles/helper.css'

class App extends Component {

  render() {
    return (
      <div>
        <PersonalInfo />
        <AboutMe />
      </div>
    );
  }
  
}

export default App;
