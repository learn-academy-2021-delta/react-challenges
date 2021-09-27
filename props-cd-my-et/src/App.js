import React, { Component } from 'react' 
import Rolldice from './components/Rolldice'
class App extends Component{
  constructor(){
    super()
      this.state = {
        dice: [1, 2, 3, 4, 5, 6],
        roll: 0
      } 
    }
    handleClick = () => {
      let length = this.state.dice.length 
      let randomNum = Math.floor(Math.random() * length)
      this.setState({roll: randomNum})
    }
  render(){
    return(
      <>
      <h1>Dice Roller</h1>
      <Rolldice integer = {this.state.dice[this.state.roll]} click= {this.handleClick}/>
      </>
    )
  }
}

export default App