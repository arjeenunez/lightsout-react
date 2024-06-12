import React, { Component } from "react";
import Cell from "./Cell"
import "./Grid.css"

function Rando() {
    return Math.floor(Math.random() * 2);
}

class Grid extends Component {
    static defaultProps = {
        numSquares: 25
        
    }
    constructor(props) {
        super(props);
        this.state = {
            colorValues: Array.from({ length: this.props.numSquares }, el => Rando())
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(chosen) {
        let arr = [chosen, chosen - 5, chosen + 5, chosen - 1, chosen + 1];
        if (chosen % 5 === 0) arr = [chosen, chosen - 5, chosen + 5, chosen + 1]
        if (chosen % 5 === 4) arr = [chosen, chosen - 5, chosen + 5, chosen - 1]
        this.setState(st => ({
            // colorValues: st.colorValues.map(el => 0),
            colorValues: st.colorValues.map((el, ind) => !arr.includes(ind) ? el : el === 0 ? 1 : 0),
        }))
    }
    render() {
        const { colorValues } = this.state;
        const isWin = colorValues.every(el => el === 0) && <div className="Grid-title-container"><h1 className="Grid-title-one">You</h1><h1 className="Grid-title-two"> Win!</h1></div>
        return (
            <div className="Grid">
                <div className="Grid-title-container">
                    <h1 className="Grid-title-one">Lights</h1><h1 className="Grid-title-two">Out</h1>
                </div>
                <div className="Grid-cells-container">
                    <div className="Grid-cells-shadow">
                    </div>
                    <div className="Grid-cells">
                        {colorValues.map((el, i) => (
                            <Cell key={i} colorValue={el} toggle={this.toggle} place={i} />
                            ))}
                    </div>
                </div>
                { isWin }
        </div>
    )}
}

export default Grid;