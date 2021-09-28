import React, { Component } from 'react'
import Dice from './components/Dice'
import Logs from './components/Logs'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      diceArray : [1, 2, 3, 4, 5, 6],
      randomRoll: 0
    }
  }
handleClick = () => {
  //finding the length of the array
  let length = this.state.diceArray.length
  // creating a random number that uses the lengbth of the array for use later
  let randomNum = Math.floor(Math.random() * length)
  // saves the number in state by overwriting the key:value pair randimal
  this.setState({randomRoll: randomNum})
}


  render() {
    return (
      <>
       {/* {this.state.animalsArray.map(value=>{
         return <FlashCard superman={value}/>
       })} */}

        <Dice
          showdice={this.state.diceArray[this.state.randomRoll]}
          click={this.handleClick}
        />
      </>
    )
  }
}
