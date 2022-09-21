import React, { Component } from "react";
import InputEditable from "./InputEditable";
// import InputEditableDelete from "./InputEditableDelete";
import '../Styles/helper.css'

class Projects extends Component {

    constructor() {
        super(); 

        this.state = {
            title: 'Projects',
            projects: [{
                title: '',
                link: '',
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
                    <div className="grid-2-col grid-col-gap grid-1-col-sm">
                    {this.state.projects.map((project, index) => {
                        return( 
                                <div key={`projects-input-${index}`} className="delete-obj" data-name={`projects-${index}`}>
                                    <InputEditable
                                     data={project.title} 
                                     callback={this.inputChange}
                                     fieldName={`projects-${index}-title`} 
                                     type="h3" 
                                     inputType="text"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="Project Title"
                                    />
                                    <InputEditable
                                     data={project.link} 
                                     callback={this.inputChange}
                                     fieldName={`projects-${index}-link`} 
                                     type="a" 
                                     inputType="text"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="Project link"
                                    />
                                    <InputEditable
                                     data={project.description} 
                                     callback={this.inputChange}
                                     fieldName={`projects-${index}-description`} 
                                     type="p" 
                                     inputType="textArea"
                                     placeholder="Description of project..."
                                    />


                                    <span className="hover-edit-obj">
                                        <i className="fa-solid fa-trash-can text-danger cursor-pointer" onClick={this.deleteFromArray}></i>
                                    </span>

                                </div>

                        )
                    })}
                    </div>
                    <span className="justify-self-center text-success btn-add primary-color-text" tabIndex="0" onKeyPress={() => this.addToArray('projects')}><i className="fa-solid fa-circle-plus fa-2x cursor-pointer mt-1" onClick={() => this.addToArray('projects')}></i></span>
                </div>
            </div>
        )
    }
}

export default Projects;