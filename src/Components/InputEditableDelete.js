import React, { Component } from "react";
import '../Styles/inputStyle.css'

class InputEditableDelete extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            edit: true
        }

        this.updateEdit = this.updateEdit.bind(this)
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
                    <h1 className="input-text-state" data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can" onClick={this.props.deleteCallback}></i>
                        </span>
                    </h1>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="h2") {
            return(
                <div>
                    <h2 className="input-text-state" data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can" onClick={this.props.deleteCallback}></i>
                        </span>
                    </h2>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="h3") {
            return(
                <div>
                    <h3 className="input-text-state" data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can" onClick={this.props.deleteCallback}></i>
                        </span>
                    </h3>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="p") {
            return(
                <div>
                    <span className="input-text-state" data-name={this.props.fieldName}>
                        {textState}
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can" onClick={this.props.deleteCallback}></i>
                        </span>
                    </span>

                </div>
            )
        }
        if(!this.state.edit && this.props.type==="a") {
            return(
                <div>
                    <span className="input-text-state" data-name={this.props.fieldName}>
                        <a href={`https://${this.props.data}`} target="_blank" rel="noreferrer">{textState}</a>
                        <span className="hover-edit cursor-pointer">
                            <i className="fa-solid fa-pencil "  onClick={this.updateEdit}></i>
                            <i className="fa-solid fa-trash-can" onClick={this.props.deleteCallback}></i>
                        </span>
                    </span>

                </div>
            )
        }
        
        
        
        if(this.state.edit && this.props.inputType==="text") {
            return (
                <div className="">
                    <label className="input-label">
                        <input placeholder={this.props.fieldName} className="p-1 mb-2"  type="text" value={this.props.data} onChange={this.props.callback} data-name={this.props.fieldName} autoComplete="asdasd"/>
                        <i className="fa-regular fa-circle-check cursor-pointer" onClick={this.updateEdit}></i>
                    </label>
                </div>
            )
        }
        if(this.state.edit && this.props.inputType==="email") {
            return (
                <div className="">
                    <label className="input-label">
                        <input placeholder={this.props.fieldName} className="p-1 mb-2"  type="email" value={this.props.data} onChange={this.props.callback} data-name={this.props.fieldName} autoComplete="asdasd"/>
                        <i className="fa-regular fa-circle-check cursor-pointer" onClick={this.updateEdit}></i>
                    </label>
                </div>
            )
        }
    }
}

export default InputEditableDelete;