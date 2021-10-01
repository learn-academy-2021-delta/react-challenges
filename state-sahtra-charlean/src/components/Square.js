import React, { Component } from 'react'

class Square extends Component{
  constructor(props){
    super(props)
    this.state = {
      colorArray: [
      "green",
      "blue",
      "red",
      "orange",
      "yellow",
      "purple"
      ],
      color: ""
    }
  }

changeColor = ()=> {
  let dice = Math.floor(Math.random() * 6)
  console.log(dice);
  this.setState({color: this.state.colorArray[dice]})
}
  render(){

    return(
      <>
      <button className = "square" onClick= {this.changeColor} >{this.state.color}</button>
      </>
    )
  }
}

export default Square
