import React, { Component } from "react";
import InputEditable from "./InputEditable";
// import InputEditableDelete from "./InputEditableDelete";

class CustomLayout extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            subtitle: this.props.subtitle,
            columns: this.props.columns

        }

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange( e ) {
        let field = e.target.getAttribute('data-name').split("-")[0];
        let index = e.target.getAttribute('data-name').split("-")[1] || null;
        let index2 = e.target.getAttribute('data-name').split("-")[2] || null;
        let currValue = this.state[field];
        if(index !== null && index2 === null){
            currValue[index] = e.target.value;
        } else if (index !== null && index2 !== null) {
            currValue[index][index2] = e.target.value;
        } else {
            currValue = e.target.value;
        }
        this.setState({
            [field]: currValue
        })
    }

    /*
        Props
        subtitle - 1/0
        number of columns 1 - 3
        number of inputs 1 - 3

    */
    render() {
        return (
            <div className="grid-1-col p-5">
                <div>
                    {this.state.subtitle.map((x,index)=> {
                        return (
                            <div key={`custom-subtitle-${index}`}>
                                <InputEditable data={this.state.title} callback={this.inputChange} fieldName={`title`} type="h2" inputType="text" additionalClassesOutput="header-text"/>
                                {/* <InputEditable data={x} callback={this.inputChange} fieldName={`subtitle-${index}`} type="h3" inputType="text" additionalClassesOutput="header-text"/> */}
                            </div>
                        )
                    })}

                    <div className={`grid-${this.state.columns.length}-col grid-col-gap`}>


                    {this.state.columns.map((y,index2)=> {
                        return (
                            <div key={`Custom-${index2}`}>
                                {y.map((z,index3)=> {
                                    return (
                                        <div key={`custom-input-${index3}`}>   
                                            <InputEditable data={z} callback={this.inputChange} fieldName={`columns-${index2}-${index3}`} type="p" inputType="textArea" placeholder="" additionalClassesOutput="p-text"/>
                                        </div>
                                    )   
                                    })}
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomLayout;