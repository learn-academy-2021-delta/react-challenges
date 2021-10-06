import React, { Component } from 'react'

class GoodRobot extends Component{

  render(){
    return(
      <>
      <h2>Good Robot </h2>
        <div>{this.props.handleChange}</div>
        <p>I hear you saying {this.props.input}. Is that correct?</p>
      </>
    )
  }
}
export default GoodRobot