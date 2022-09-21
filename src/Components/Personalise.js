import React, { Component } from "react";

class Personalise extends Component {

    constructor() {
        super(); 

        this.print = this.print.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.closeInput = this.closeInput.bind(this);
        this.activateBtn = this.activateBtn.bind(this);
        this.updateCSSVar = this.updateCSSVar.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    print() {
        window.print();
    }

    changeColor() {
        console.log("Change color clicked"); 
        document.querySelector('.color-bar input').classList.remove('d-none');
    }

    updateColor( e ){
        this.updateCSSVar('currentColor',null,e.target.value);
        this.inputChange( e );
    }

    closeInput( e ){
        // console.log(e)
        // console.log(e.target.getBoundingClientRect())
        // setTimeout(()=> {
            document.querySelector('.color-bar input').classList.add('d-none');

        // }, 100)
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
        console.log(e.target.value);
        console.log(property);
        console.log(id);
        this.updateCSSVar(id,property,e.target.value);

    }
    
    render() {

        // This broke stuff...
        // let myFontSize = [];
        // for (let i = 8; i < 100; i+2){
        //     myFontSize.push(i);
        // }


        return (
            <div className="print-hide w-100">

                <ul className="d-flex flex-wrap personalise-controls">


                    <li>
                        <select name="input-type" id="input-type">
                            <option value="primary-color">Primary Color</option>
                            <option value="p-text">Paragraph Text</option>
                            <option value="header-text">Section Header</option>
                            <option value="header-text">Section Header</option>
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
                        </select>
                    </li>

                    <li>
                            <button className="mr-1 p-1 btn btn-bold btn-personalise text-bold" onClick={this.activateBtn} id="bold" data-property="fw">B</button>
                            <button className="mr-1 p-1 btn btn-italic btn-personalise text-italic" onClick={this.activateBtn} id="italic" data-property="fi">I</button>
                            <button className="mr-1 p-1 btn btn-underline btn-personalise text-underline" onClick={this.activateBtn} id="underline" data-property="fu">U</button>
                    </li>

                    <li className="color-bar" onClick={this.changeColor}>
                        <span>
                            A
                        </span>
                        <span><i className="fa-solid fa-caret-down"></i></span>
                        <span className="current-color"></span>
                        <input className="d-none" type="color" name="font-color" id="font-color" onChange={this.updateColor} onMouseLeave={this.closeInput} data-property="fc"/>
                    </li>
                    




                </ul>
            
            </div>
        )
    }
}

export default Personalise;