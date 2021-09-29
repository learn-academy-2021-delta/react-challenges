import React, { Component } from 'react'
import './App.css'
import Dice from './components/Dice'
import Logs from './components/Logs'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      diceArray : [],
      index: 1
    }
  }
handleClick = () => {
  //finding the length of the array
  //let length = this.state.diceArray.length
  let length = 6
  // creating a random number that uses the lengbth of the array for use later
  let randomNum = Math.ceil(Math.random() * length)
  // saves the number in state by overwriting the key:value pair randimal
  let varArray = this.state.diceArray
  varArray.push(randomNum)
  this.setState({index:randomNum, diceArray: varArray})
}


  render() {
    return (
      <>
       {/* {this.state.animalsArray.map(value=>{
         return <FlashCard superman={value}/>
       })} */}

        <Dice number={this.state.diceArray} click={this.handleClick}/>
        <Logs array={this.state.diceArray}/>
      </>
    )
  }
}
