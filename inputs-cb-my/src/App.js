import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import Kanyebot from './components/Kanyebot'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: '',
      // arrayBLA:[],
      // nextBLA: "B"
    }
  }
handleChange = (e) => {
  this.setState({userInput: e.target.value})
}


  render(){
    return(
      <>
        <h1>Robot Active Listener</h1>
        <input type = "text"
              value = {this.state.userInput}
              onChange = {this.handleChange}
            />
          <GoodRobot handleChange={this.handleChange}
                input={this.state.userInput}
            />
          <BadRobot handleChange={this.handleChange}
                input={this.state.userInput}
            />
          <Kanyebot handleChange={this.handleChange}
                input={this.state.userInput}
            />
      </>
    )
  }
}


export default App
