import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: "",
      // B = [],
      // L = [],
      // A = [],

    }
  }
}
  let b = () => {
    for(let i = 0; i < b.length - 1; i=+3) {
      b[i] = "B";
      return this.setState({userInput})
    }
  // for (var i = 3; i < str.length - 1; i+=4) {
  //      str[i] = "|";
  // }
  // console.log(b.join(""));
  
  
  handleChange = (e) => {
    this.setState({userInput:e.target.value})
  }

  render() {
    return (
      <>
        
<h1> Domo Arigato </h1>
      <input type="text"
      value={this.state.userInput}
      onChange={this.handleChange}
      />
  <h3>Good Robot </h3>
  {this.state.userInput}

  <h3>Bad Robot</h3>
  {this.state.userInput.split("").map((value)=>{
                
  }
  )}

  <h3>Kanye 5000</h3>
  {this.state.userInput}


      </>
    )
  }
}
export default App