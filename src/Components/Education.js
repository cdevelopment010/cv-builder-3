import React, { Component } from "react";
import InputEditable from "./InputEditable";
// import InputEditableDelete from "./InputEditableDelete";
import '../Styles/helper.css'

class Education extends Component {

    constructor() {
        super(); 

        this.state = {
            title: 'Education',
            educations: [{
                subject: '',
                institute: '',
                grade: '',
                dates: '',
                description: ''
            }]
        }

        this.inputChange = this.inputChange.bind(this);
        this.addToArray = this.addToArray.bind(this);
        this.deleteFromArray = this.deleteFromArray.bind(this);
    }



    inputChange( e ) {
        let field = e.target.getAttribute('data-name').split("-")[0];
        let index = e.target.getAttribute('data-name').split("-")[1] || null;
        let objField = e.target.getAttribute('data-name').split("-")[2] || null;
        let currValue = this.state[field];
        if(index !== null && objField === null){
            currValue[index] = e.target.value;
        } else if (index !== null && objField !== null) {
            currValue[index][objField] = e.target.value;
        } else {
            currValue = e.target.value;
        }
        this.setState({
            [field]: currValue
        })
    }

    addToArray( field ) {
        let currArr = this.state[field]; 
        let objToAdd = {
            title: '',
            link: '',
            description: ''
        }
        currArr.push(objToAdd); 

        this.setState({[field]: currArr})
    }

    deleteFromArray( e ) {
        console.log(e)
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
            <div className="grid-1-col p-5">
                <div>
                    <InputEditable data={this.state.title} callback={this.inputChange} fieldName={'title'} type="h2" inputType="text" editMe={false}/>
                </div>
                <div>
                    <div className="grid-1-col grid-col-gap">
                    {this.state.educations.map((education, index) => {
                        return( 
                                <div key={`educations-input-${index}`} className="delete-obj grid-2-col grid-1-col-sm grid-col-gap" data-name={`educations-${index}`}>
                                    <InputEditable
                                     data={education.subject} 
                                     callback={this.inputChange}
                                     fieldName={`educations-${index}-subject`} 
                                     type="h3" 
                                     inputType="text"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="Mathematics"
                                    />
                                    <InputEditable
                                    data={education.dates} 
                                    callback={this.inputChange}
                                    fieldName={`educations-${index}-dates`} 
                                    type="p" 
                                    inputType="text"
                                    additionalClasses="mt-1 mb-1 w-100"
                                    additionalClassesOutput="text-right"
                                    placeholder="July 2021 - Present"
                                    />
                                    <InputEditable
                                     data={education.grade} 
                                     callback={this.inputChange}
                                     fieldName={`educations-${index}-grade`} 
                                     type="p" 
                                     inputType="text"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="First"
                                    />
                                    <div></div>
                                    <InputEditable
                                     data={education.institute} 
                                     callback={this.inputChange}
                                     fieldName={`educations-${index}-institute`} 
                                     type="p" 
                                     inputType="text"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="University of [X]"
                                    />
                                    <div></div>

                                    <div className="grid-col-span-2 grid-col-span-1-sm">
                                        <InputEditable
                                        data={education.description} 
                                        callback={this.inputChange}
                                        fieldName={`educations-${index}-description`} 
                                        type="p" 
                                        inputType="textArea"
                                        placeholder="Description"
                                        />
                                    </div>

                                    <span className="hover-edit-obj">
                                        <i className="fa-solid fa-trash-can text-danger cursor-pointer" onClick={this.deleteFromArray}></i>
                                    </span>

                                </div>

                        )
                    })}
                    </div>
                    <span className="justify-self-center text-success btn-add cursor-pointer" tabIndex="0" onKeyPress={() => this.addToArray('educations')}><i className="fa-solid fa-circle-plus fa-2x cursor-pointer mt-1" onClick={() => this.addToArray('educations')}></i></span>
                </div>
            </div>
        )
    }
}

export default Education;