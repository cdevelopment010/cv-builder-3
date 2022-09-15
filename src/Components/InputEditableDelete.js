import React, { Component } from "react";
import '../Styles/inputStyle.css'

class InputEditableDelete extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            edit: true
        }

        this.updateEdit = this.updateEdit.bind(this);
        this.submitInput = this.submitInput.bind(this);
    }

    submitInput( e ) {
        console.log(e);
        if (e.key ===  "Enter"){this.updateEdit()}
    }

    updateEdit() {
        let newVal=!this.state.edit
        console.log(newVal);

        this.setState({edit: newVal})
    }

    render() {
        let textState = this.props.data !== '' ? this.props.data : 'no value';
        if(!this.state.edit && this.props.type==="h1") {
            return(
                <div>
                    <h1 className={`input-text-state ${this.props.additionalClasses} ${this.props.additionalClassesOutput}`} data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can text-danger" onClick={this.props.deleteCallback}></i>
                        </span>
                    </h1>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="h2") {
            return(
                <div>
                    <h2 className={`input-text-state mb-2 ${this.props.additionalClasses} ${this.props.additionalClassesOutput}`} data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can text-danger" onClick={this.props.deleteCallback}></i>
                        </span>
                    </h2>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="h3") {
            return(
                <div>
                    <h3 className={`input-text-state ${this.props.additionalClasses} ${this.props.additionalClassesOutput}`} data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can text-danger" onClick={this.props.deleteCallback}></i>
                        </span>
                    </h3>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="p") {
            return(
                <div>
                    <span className={`input-text-state ${this.props.additionalClasses} ${this.props.additionalClassesOutput}`} data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can text-danger" onClick={this.props.deleteCallback}></i>
                        </span>
                    </span>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="a") {
            return(
                <div>
                    <span className={`input-text-state ${this.props.additionalClasses} ${this.props.additionalClassesOutput}`} data-name={this.props.fieldName}>
                        <a href={`https://${this.props.data}`} target="_blank" rel="noreferrer">{textState}</a>
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can text-danger" onClick={this.props.deleteCallback}></i>
                        </span>
                    </span>

                </div>
            )
        }
        
        
        
        if(this.state.edit && this.props.inputType==="text") {
            return (
                <div className="flex-grow">
                    <label className="input-label">
                        <input placeholder={this.props.placeholder} className={`p-1 mb-2 ${this.props.additionalClasses}`}  type="text" value={this.props.data} onKeyPress={this.submitInput} onChange={this.props.callback} data-name={this.props.fieldName} autoComplete="asdasd"/>
                        <button type="button" onClick={this.updateEdit}><i className="fa-regular fa-circle-check cursor-pointer" onClick={this.updateEdit}></i></button>
                    </label>
                </div>
            )
        }
        if(this.state.edit && this.props.inputType==="email") {
            return (
                <div className="">
                    <label className="input-label">
                        <input placeholder={this.props.placeholder} className={`p-1 mb-2 ${this.props.additionalClasses}`} type="email" value={this.props.data} onKeyPress={this.submitInput} onChange={this.props.callback} data-name={this.props.fieldName} autoComplete="asdasd"/>
                        <button type="button" onClick={this.updateEdit}><i className="fa-regular fa-circle-check cursor-pointer" onClick={this.updateEdit}></i></button>
                    </label>
                </div>
            )
        }
    }
}

export default InputEditableDelete;