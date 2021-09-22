import React, { Component } from "react"




class Color extends Component {
constructor(props){
    super(props)
    this.state = {
      color: "red"
    }
  }


  colorChange = () => {
    this.setState({color:["green", "purple", "red", "blue", "orange", "yellow", "pink"]})
  }

render(){
  let {color} = this.state

  return(
    <>
    <div id="square">
  <button onClick = {this.colorChange}>{this.state.color}</button>
  </div>
</>
    )
  }
}

export default Color