import React, { Component } from 'react'
// import GoodRobot from './components/GoodRobot'
// import BadRobot from './components/BadRobot'
// import Kanyebot from './components/Kanyebot'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ''
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

        <h2>Good Robot </h2>
        <p>I hear you saying {this.state.userInput}. Is that correct?</p>
        <h2>Bad Robot </h2>
        <p>I hear you saying {this.state.userInput.split("").map((value) => {
          return "BLA"
        })}. Is that correct?</p>
        <h2>Kanyebot 5000 </h2>
        <p>I'm gonna let you finish, but BEYONCE is {this.state.userInput}!</p>


      </>
    )
  }
}


export default App
