import React, { Component } from 'react'

export default class Dice extends Component {
    render() {
        return (
            <>
                <div className="diceNumber" onClick={this.props.click}>
                  <h1>Click Box to Roll</h1>
                </div>
                <div className="eachRoll">
                  <h1>{this.props.number}</h1>
                </div>
            </>
        )
    }
}
