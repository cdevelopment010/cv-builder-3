import React, { Component } from "react";
import InputEditable from "./InputEditable";
// import InputEditableDelete from "./InputEditableDelete";

class AboutMe extends Component {

    constructor() {
        super(); 

        this.state = {
            title: 'About Me',
            aboutText: ''
        }

        this.inputChange = this.inputChange.bind(this);
        // this.addToArray = this.addToArray.bind(this);
        // this.deleteFromArray = this.deleteFromArray.bind(this);
    }



    inputChange( e ) {
        let field = e.target.getAttribute('data-name').split("-")[0];
        let index = e.target.getAttribute('data-name').split("-")[1] || null;
        let currValue = this.state[field];
        if(index !== null ){
            currValue[index] = e.target.value;
        } else {
            currValue = e.target.value;
        }
        this.setState({
            [field]: currValue
        })
    }

    // addToArray( field ) {
    //     let currArr = this.state[field]; 
    //     currArr.push(''); 

    //     this.setState({[field]: currArr})
    // }

    // deleteFromArray( e ) {
    //     let dataField = e.target.parentElement.parentElement; //first parent is the span container, second is the one with data-name 
    //     let field = dataField.getAttribute('data-name').split("-")[0];
    //     let index = dataField.getAttribute('data-name').split("-")[1]*1;
    //     let currValue = this.state[field];

    //     let leftArr = currValue.slice(0, index); 
    //     let rightArr = currValue.slice(index+1); 
    //     let newArr = [...leftArr, ...rightArr]; 

    //     this.setState({[field]: newArr})

    // }

    render() {
        return (
            <div className="grid-1-col p-5">
                <div>
                    <InputEditable data={this.state.title} callback={this.inputChange} fieldName={'title'} type="h2" inputType="text" editMe={false}/>
                    <InputEditable data={this.state.aboutText} callback={this.inputChange} fieldName={'aboutText'} type="p" inputType="textArea"/>
                </div>
            </div>
        )
    }
}

export default AboutMe;