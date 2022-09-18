import React, { Component } from "react";

class PrintBtn extends Component {

    constructor() {
        super(); 

        this.print = this.print.bind(this);
    }

    print() {
        window.print();
    }

    render() {
        return (
            <div className="print-hide">
                <button className="btn print-btn" onClick={this.print}>Print</button>
            </div>
        )
    }
}

export default PrintBtn;