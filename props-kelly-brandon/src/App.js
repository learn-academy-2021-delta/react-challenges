import React from "react";
import { Component } from "react";

class App extends React.Component{
constructor(){
  super()
  this.state = {
    diceRolls : ["1", "2", "3", "4", "5", "6"],
    diceStart: 0
  }
}

roll = () => {
  let length = this.state.diceRolls.length
  let randomNum = Math.floor(Math.random() * length)
  this.setState({diceStart: randomNum})
}


  render(){
    return(
      <>
      <Dice
      result={this.state.diceRolls[this.state.diceStart]}
      click={this.roll}
      />
      </>
    )
  }
}



class Dice extends Component{
  render(){
    return(
      <>
      </>
    )
  }
}
export default App