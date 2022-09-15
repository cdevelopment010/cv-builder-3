import React, { Component } from "react";
import InputEditable from "./InputEditable";
import InputEditableDelete from "./InputEditableDelete";

class Skills extends Component {

    constructor() {
        super(); 

        this.state = {
            title: 'Skills',
            skills: ['']
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
            <div className="grid-1-col p-5">
                <div>
                    <InputEditable data={this.state.title} callback={this.inputChange} fieldName={'title'} type="h2" inputType="text" editMe={false}/>
                </div>
                <div>
                    <ul className="d-flex flex-wrap d-block-sm">
                    {this.state.skills.map((skill, index) => {
                        return( 
                            <li className="list-none d-flex mr-3 align-center" key={`skills-input-${index}`} > 
                                <i className="fa-solid fa-circle-dot mr-1"></i>
                                <InputEditableDelete 
                                data={skill} 
                                callback={this.inputChange}
                                deleteCallback = {this.deleteFromArray}
                                fieldName={`skills-${index}`} 
                                type="p" 
                                inputType="text"
                                placeholder="Microsoft Excel"
                                additionalClasses="w-100"
                                />
                            </li>
                        )
                    })}
                    </ul>
                    <span className="justify-self-center text-success btn-add" tabIndex="0" onKeyPress={() => this.addToArray('skills')}><i className="fa-solid fa-circle-plus fa-2x cursor-pointer mt-1" onClick={() => this.addToArray('skills')}></i></span>
                </div>
            </div>
        )
    }
}

export default Skills;