import React, { Component } from "react";
import InputEditable from "./InputEditable";
import InputEditableDelete from "./InputEditableDelete";

class PersonalInfo extends Component {

    constructor() {
        super(); 

        this.state = {
            name: '',
            email: '',
            phone: '',
            websites: ['']
        }

        this.inputChange = this.inputChange.bind(this);
        this.addToArray = this.addToArray.bind(this);
        this.deleteFromArray = this.deleteFromArray.bind(this);
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

    addToArray( field ) {
        let currArr = this.state[field]; 
        currArr.push(''); 

        this.setState({[field]: currArr})
    }

    deleteFromArray( e ) {
        let dataField = e.target.parentElement.parentElement; //first parent is the span container, second is the one with data-name 
        let field = dataField.getAttribute('data-name').split("-")[0];
        let index = dataField.getAttribute('data-name').split("-")[1]*1;
        let currValue = this.state[field];

        let leftArr = currValue.slice(0, index); 
        let rightArr = currValue.slice(index+1); 
        let newArr = [...leftArr, ...rightArr]; 

        this.setState({[field]: newArr})

    }

    render() {
        return (
            <div className="grid-2-col p-5">
                <div>
                    <InputEditable data={this.state.name} callback={this.inputChange} fieldName={'name'} type="h1" inputType="text"/>
                    <InputEditable data={this.state.email} callback={this.inputChange} fieldName={'email'} type="p" inputType="email"/>
                    <InputEditable data={this.state.phone} callback={this.inputChange} fieldName={'phone'}  type="p" inputType="text"/>
                </div>
                
                <div>
                    {this.state.websites.map((site, index) => {
                        return(
                            <InputEditableDelete 
                                data={site} 
                                key={`website-input-${index}`} 
                                callback={this.inputChange}
                                deleteCallback = {this.deleteFromArray}
                                fieldName={`websites-${index}`} 
                                type="a" 
                                inputType="text"/>
                        )
                    })}
                    <span className="justify-self-center"><i className="fa-solid fa-circle-plus fa-2x cursor-pointer mt-1" onClick={() => this.addToArray('websites')}></i></span>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;