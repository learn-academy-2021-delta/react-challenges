import React, { Component } from 'react'
import Dice from './components/Dice'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      die: [ 1, 2, 3, 4, 5, 6],
      currentResult: 1
    }
  }

  diceRoll = () => {
    let nextRoll = Math.floor(Math.random() * this.state.die.length)
    this.setState({ currentResult: nextRoll })
  }

  render() {
    return(
      <Dice 
        die={ this.state.die[this.state.currentResult] }
        log={ this.diceRoll }  
      />
    )  
  }
}

export default App