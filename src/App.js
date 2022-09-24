import React, { Component } from "react";

import Header from "./Components/Header";
import Personalise from "./Components/Personalise";
import PersonalInfo from "./Components/PersonalInfo";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Career from "./Components/Career";
import Education from "./Components/Education";
import References from "./Components/References";
import PrintBtn from "./Components/PrintBtn";
import Footer from "./Components/Footer";

import './Styles/personalise.css';
import './Styles/index.css';
import './Styles/helper.css'; 
import './Styles/cv.css';
import './Styles/footer.css';
import './Styles/mediaQueries.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      componentOptions: [ 'PersonalInfo', 'AboutMe' , 'Skills' , 'Projects' , 'Career' , 'Education', 'References'], 
      currentView: [ < PersonalInfo />, <AboutMe />, <Skills />, <Projects />, <Career />, <Education/>, <References />],
      components: [ < PersonalInfo />, <AboutMe />, <Skills />, <Projects />, <Career />, <Education/>, <References />]
    }

    this.addItem = this.addItem.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeSection = this.removeSection.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  moveUp(e){
    let currentView = [...this.state.currentView];
    let index = e.target.parentElement.parentElement.dataset.index*1;
    currentView.splice(index-1,0, currentView.splice(index,1)[0]);
    console.log(currentView);
    this.setState({currentView});
  }

  moveDown( e ) {
    let currentView = [...this.state.currentView];
    let index = e.target.parentElement.parentElement.dataset.index*1;
    currentView.splice(index+1,0, currentView.splice(index,1)[0]);
    this.setState({currentView});
  }

  removeSection(e) {
    let currentView = [...this.state.currentView];
    let index = e.target.parentElement.parentElement.dataset.index*1;
    let newView = [...currentView.slice(0, index), ...currentView.slice(index+1)];
    this.setState({currentView: newView});
  }

  openModal() {
    document.querySelector('.modal').classList.remove('d-none');
    document.querySelector('.add-section-list').classList.remove('d-none');
  }

  closeModal() {
    document.querySelector('.modal').classList.add('d-none');
    document.querySelector('.add-section-list').classList.add('d-none');
  }

  addItem(e) {
    let currentView = [...this.state.currentView];
    let index = e.target.dataset.index; 
    currentView.push(this.state.components[index]);
    this.setState({
      currentView: currentView
    }); 
    //hide modal
    this.closeModal();
  }

  render() {
    return (
      <div className="grid-1-col justify-items-center grid-row-gap-3">

        <Header />
        <Personalise />
        <div className="cv-container print-area grid-1-col">
          {this.state.currentView.map((item, index) => {
            return <div key={index} className="section" data-index={index}>
                {item}
                <span className="hover-edit cursor-pointer">
                  <i className="fa-solid fa-trash-can text-danger ml-2" onClick={this.removeSection}></i>
                  <i className="fa-solid fa-caret-up ml-2" onClick={this.moveUp}></i>
                  <i className="fa-solid fa-caret-down  ml-2 mr-2" onClick={this.moveDown}></i>

                </span>
              </div>
          })}
          <div className="text-center hr-line pb-2 pt-2 print-hide add-section">
            <span className="primary-color-text btn-add bg-white" tabIndex="0"><i className="fa-solid fa-circle-plus fa-2x cursor-pointer mt-1" onClick={this.openModal}></i></span>
           <div className="modal d-none" onClick={this.closeModal}></div>
           <div className="add-section-list d-none">
              <ul>
                {this.state.componentOptions.map((item, index)=> {
                  return <li key={`add-section-${index}`} onClick={this.addItem} data-index={index}>{item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <PrintBtn />
        <Footer />
      </div>
    );
  }
  
}

export default App;
