import React, { Component } from 'react'
import DiceRoller from './Components/DiceRoller'
import RollLogger from './Components/RollLogger'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
        diceFaces : [1,2,3,4,5,6],
      randimal: 0
    }
  }
handleClick = () => {
  //finding the length of the array
  let length = this.state.diceFaces.length
  // creating a random number that uses the lengbth of the array for use later
  let randomNum = Math.floor(Math.random() * length)
  // saves the number in state by overwriting the key:value pair randimal
  this.setState({randimal: randomNum})
}


  render() {
    return (
      <>
       {/* {this.state.animalsArray.map(value=>{
         return <FlashCard superman={value}/>
       })} */}
       
       <RollLogger />
        <DiceRoller
          superman={this.state.diceFaces[this.state.randimal]} 
          click={this.handleClick}
        />

      </>
    )
  }
}