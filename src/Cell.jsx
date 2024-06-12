import React, { Component } from "react";
import "./Cell.css"

class Cell extends Component {
    static defaultProps = {
        colors: ["rgb(32, 31, 66)", "rgb(90, 197, 233)"]
    }
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(evt) {
        this.props.toggle(this.props.place)
    }
    render() {
        const initialColor = this.props.colors[this.props.colorValue];
        return <div className="Cell" style={{backgroundColor: initialColor}} onClick={this.handleToggle}></div>
    }
}

export default Cell;