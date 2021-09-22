import React, { Component } from 'react'

class Square extends Component{
  constructor(props){
    super(props)
    this.state = {
      color: "[green, blue, yellow, red, purple, orange]"
    }
  }

changeColor = ()=> {
  this.setState({color: this.state.color})
}
  render(){

    return(
      <>
      <div className = "square" onClick={this.state.color}></div>
      <button>Click here</button>
      </>
    )
  }
}

export default Square
