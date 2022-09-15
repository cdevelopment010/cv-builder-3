import React, { Component } from "react";
import InputEditable from "./InputEditable";
// import InputEditableDelete from "./InputEditableDelete";
import '../Styles/helper.css'

class References extends Component {

    constructor() {
        super(); 

        this.state = {
            title: 'References',
            references: [{
                name: '',
                email: '',
                phone: ''
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
                    <div className="grid-2-col grid-1-col-sm grid-col-gap">
                    {this.state.references.map((reference, index) => {
                        return( 
                                <div key={`references-input-${index}`} className="delete-obj" data-name={`references-${index}`}>
                                    <InputEditable
                                     data={reference.name} 
                                     callback={this.inputChange}
                                     fieldName={`references-${index}-name`} 
                                     type="h3" 
                                     inputType="text"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="Jane Doe"
                                    />
                                    <InputEditable
                                     data={reference.email} 
                                     callback={this.inputChange}
                                     fieldName={`references-${index}-email`} 
                                     type="a" 
                                     inputType="email"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="Jane.Doe@example.com"
                                    />
                                    <InputEditable
                                     data={reference.phone} 
                                     callback={this.inputChange}
                                     fieldName={`references-${index}-phone`} 
                                     type="p" 
                                     inputType="text"
                                     additionalClasses="mt-1 mb-1 w-100"
                                     placeholder="789-789-7890"
                                    />


                                    <span className="hover-edit-obj">
                                        <i className="fa-solid fa-trash-can text-danger cursor-pointer" onClick={this.deleteFromArray}></i>
                                    </span>

                                </div>

                        )
                    })}
                    </div>
                    <span className="justify-self-center text-success btn-add" tabIndex="0" onKeyPress={() => this.addToArray('references')}><i className="fa-solid fa-circle-plus fa-2x cursor-pointer mt-1" onClick={() => this.addToArray('references')}></i></span>
                </div>
            </div>
        )
    }
}

export default References;