import React, { Component } from 'react'

class Box extends Component {
  constructor(props){
    super(props)
    this.handleChangeColor = this.handleChangeColor.bind(this)
  }
    //Callback handler
    handleChangeColor(){
      //Call parent component changeColor method is passing the color value of div
      this.props.changeColor(this.props.color)
    }
  render(){
    // create a div component and assign the given color value by BoxContainer component as its Background color
    return <div
    // set click handler to the div and pass a calllback
    onClick={this.handlerChangeColor}
    style={{backgroundColor:this.props.color,
                  width: '13em', height: '13e,'}}
    />
  }
}

export default Box
   