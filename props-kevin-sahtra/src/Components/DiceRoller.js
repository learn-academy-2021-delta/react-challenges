import React, { Component } from 'react'

export default class DiceRoller extends Component {
    render() {
        let diceStyles = {
            border: "1px solid black",
            width: "95px",
            height: "95px",
            margin: "10px",
            padding: "10px"
          }
        return (
            <>
                <div onClick={this.props.click} style={diceStyles}>
                {this.props.diceFaces.map((index) => {
                  return (
                    <div style={diceStyles} key={index}>{this.props.diceFaces}
                    </div>
                  )
                })}
                <h1>Wow! A Dice Roller!</h1>
                <h1>{this.props.superman}</h1>
                </div>
            </>
        )
    }
}