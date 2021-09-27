import React, { Component } from 'react'

class Dice extends Component{
    render() {
      return(
        <>
          <h1>Hello, { this.props.die }!</h1>
          <button onClick={ this.props.log }>Roll the dice</button>
          <p>Click box to roll</p>
        </>
      )
    }
  }
  
  export default Dice
