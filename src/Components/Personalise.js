import React, { Component } from "react";

class Personalise extends Component {

    constructor() {
        super(); 

        this.print = this.print.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.activateBtn = this.activateBtn.bind(this);
        this.updateCSSVar = this.updateCSSVar.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    print() {
        window.print();
    }

    changeColor() {
        // document.querySelector('.color-bar input').classList.remove('d-none');
        document.querySelector('.color-bar input').focus()
    }

    updateColor( e ){
        this.updateCSSVar('--primary-color-fc',null,e.target.value);
        this.inputChange( e );
    }


    activateBtn( e ) {
        console.log(e.target.id);
        if(document.querySelector(`#${e.target.id}`).classList.contains('active')){
            document.querySelector(`#${e.target.id}`).classList.remove('active');
            e.target.value = "normal";
            this.inputChange( e );
        } else {
            document.querySelector(`#${e.target.id}`).classList.add('active');
            e.target.value = e.target.id;
            this.inputChange( e );

        }
    }

    updateCSSVar(target,property,value) {
        let r = document.querySelector(':root');
        let selector =  property !== null ? `${target}-${property}`: target;
        r.style.setProperty(`--${selector}`, value);
    }

    inputChange( e ) {
        let id = document.getElementById('input-type').value;
        let property = e.target.getAttribute("data-property"); 
        // console.log(e.target.value);
        // console.log(property);
        // console.log(id);
        this.updateCSSVar(id,property,e.target.value);

    }
    
    render() {
        return (
            <div className="print-hide w-100">

                <ul className="d-flex flex-wrap personalise-controls">


                    <li>
                        <select name="input-type" id="input-type">
                            <option value="primary-color">Primary Color</option>
                            <option value="p-text">Paragraph Text</option>
                            <option value="header-text">Section Header</option>
                            <option value="name">Name</option>
                            <option value="pi-text">Personal Info</option>
                            <option value="sh-text">Sub Headers</option>
                        </select>

                    </li>

                    <li>
                        <select name="font-type" id="font-type" data-property="ff" onChange={this.inputChange}>
                            <option value="calibri">Calibri</option>
                            <option value="times new romans">Times New Romans</option>
                            <option value="roboto">Roboto</option>
                            <option value="poppins">Poppins</option>
                            <option value="inter">Inter</option>
                            <option value="oswald">Oswald</option>
                        </select>

                    </li>

                    <li>
                        {/* Need to think of a way to generate this through JS */}
                        <select name="font-size" id="font-size" data-property="fs" onChange={this.inputChange}>
                            <option value="8px">8px</option>
                            <option value="10px">10px</option>
                            <option value="12px">12px</option>
                            <option value="14px">14px</option>
                            <option value="16px">16px</option>
                            <option value="18px">18px</option>
                            <option value="20px">20px</option>
                            <option value="22px">22px</option>
                            <option value="28px">28px</option>
                            <option value="36px">36px</option>
                            <option value="48px">48px</option>
                            <option value="72px">72px</option>
                        </select>
                    </li>

                    <li>
                            <button className="mr-1 p-1 btn btn-bold btn-personalise text-bold" onClick={this.activateBtn} id="bold" data-property="fw">B</button>
                            <button className="mr-1 p-1 btn btn-italic btn-personalise text-italic" onClick={this.activateBtn} id="italic" data-property="fi">I</button>
                            <button className="mr-1 p-1 btn btn-underline btn-personalise text-underline" onClick={this.activateBtn} id="underline" data-property="fu">U</button>
                    </li>

                    <li className="color-bar" onClick={this.changeColor}>
                        <label htmlFor="font-color">
                            <span>
                                A
                            </span>
                            <span><i className="fa-solid fa-caret-down"></i></span>
                            <input type="color" value="#008000" name="font-color" id="font-color" onChange={this.updateColor} data-property="fc"/>
                        </label>
                        <span className="current-color"></span>
                    </li>
                </ul>
            
            </div>
        )
    }
}

export default Personalise;