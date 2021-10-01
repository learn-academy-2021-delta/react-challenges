import React, { Component } from 'react'

class BadRobot extends Component{

  render(){
    return(
      <>
      <h2>Bad Robot </h2>
      <div>{this.props.handleChange}</div>
      <p>I hear you saying {this.props.input}. Is that correct?</p>
        {/* <p>I hear you saying {this.props.userInput.split("").map((value) => {
          return "BLA"
        })}. Is that correct?</p> */}
      </>
    )
  }
}
export default BadRobot