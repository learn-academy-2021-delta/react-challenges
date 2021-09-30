import React, {Component} from 'react'
import Robots from './components/Robots'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      userInput: " "
    }
  }

  handleChange = (e) =>{
    console.log(e.target.value);
    this.setState({userInput: e.target.value})
  }

  render(){
    return(
      <>
        <h1>Eavesdropping Robots</h1>
        <input
          type = "text"
          value = {this.state.userInput}
          onChange = {this.handleChange}
        />

        <h2>Passes the Butter</h2>
        <Robots 
          userInput = {this.state.userInput}
        />

        <h2>BB-8</h2> {/*Bad Robot - should say BLABLABLA: 1 char for 1 input*/}
        <Robots 
          userInput = {this.state.userInput}
        />

        <h2>Wall-E</h2> {/*Our choice*/}
        <Robots 
          userInput = {this.state.userInput}
        />

      </>
    )
  }
}


