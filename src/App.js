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
import CustomLayout from "./Components/CustomLayout";
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
      componentOptions: [ 'PersonalInfo', 'AboutMe' , 'Skills' , 'Projects' , 'Career' , 'Education', 'References', 'Custom Input'], 
      currentView: [ < PersonalInfo />, <AboutMe />, <Skills />, <Projects />, <Career />, <Education/>, <References />],
      components: [ < PersonalInfo />, <AboutMe />, <Skills />, <Projects />, <Career />, <Education/>, <References />]
    }

    this.addItem = this.addItem.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeSection = this.removeSection.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.customModal = this.customModal.bind(this);
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
  customModal() {
    let sub = document.querySelector('input[name="subtitle"]').checked ? [''] : [];
    let inputs = document.getElementById('inputs').value >= 9 ? 8 : document.getElementById('inputs').value; 
    let cols = document.getElementById('columns').value >= 9 ? 8 : document.getElementById('columns').value; 
    let arrs = [];
    for(let i = 0; i < cols; i++) {
      let arr1 = [];
      for (let j = 0; j< inputs; j++) {
        arr1.push('');
      }
      arrs.push(arr1);
    }
    
    console.log(sub);

    let currentView = [...this.state.currentView];


    let itemToPush = <CustomLayout subtitle={sub} columns={arrs}/>

    currentView.push(itemToPush);
    this.setState({
      currentView: currentView
    }); 
    //hide modal
    this.closeModal();
  }

  closeModal() {
    document.querySelector('.modal').classList.add('d-none');
    document.querySelector('.add-section-list').classList.add('d-none');
    document.querySelector('.add-custom').classList.add('d-none');
  }

  addItem(e) {
    let index = e.target.dataset.index; 
    
    
    //New modal needed for custom layout (n by m matrix)

    if(e.target.innerHTML === 'Custom Input'){
      console.log("do something cool like a modal"); 
      document.querySelector('.add-section-list').classList.add('d-none');
      document.querySelector('.add-custom').classList.remove('d-none');
      return;
    };
    
    let currentView = [...this.state.currentView];





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
          {/* <CustomLayout subtitle={['']} columns={[['',''],['',''],['','']]} /> */}
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

            <div className="add-custom d-none">
              <span className="d-none"></span>
              <div>
                <p className="mb-2">Add section header?</p>
                <label htmlFor="subtitle1" className="mr-1">Yes</label>
                  <input type="radio" name="subtitle" id="subtitle1" value="1"/>
                <label htmlFor="subtitle0" className="ml-4 mr-1">No</label>
                  <input type="radio" name="subtitle" id="subtitle0" value="0"/>
              </div>

              <div>
                <label htmlFor="columns">
                  How many columns? (between 1 and 8)<br></br>
                </label>
                  <input type="number" name="columns" id="columns" max={8} min={1} />
              </div>

              <div>
                <label htmlFor="inputs">
                  How many inputs per column? (between 1 and 8) <br></br>
                </label>
                  <input type="number" name="inputs" id="inputs" max={8} min={1} />
              </div>

              <button type="button" onClick={this.customModal} className="align-self-center justify-self-center print-btn">Add</button>
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
