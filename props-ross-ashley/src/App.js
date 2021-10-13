import React, {Component} from 'react'
import Diceroll from './components/Diceroll'
// import RollLog from './components/RollLog'



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      diceArray : [1,2,3,4,5,6],
      tossIt : 0
    }
  }

  rolling = () => {
    let length = this.state.diceArray.length
    let randomNum = Math.floor(Math.random() * length)
    this.setState({tossIt: randomNum})
  }

  render() {
    return (
      <>
       <Diceroll 
          superman={this.state.diceArray[this.state.tossIt]} 
          click={this.rolling} />
        {/* <RollLog 
          rollProp={
            let diceNum = {this.state.diceArray[this.state.tossIt]}
            diceNum.push
          } */}


      </>
    )
  }
}
