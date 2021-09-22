import React, { Component } from "react"




class Color extends Component {
constructor(props){
    super(props)
    this.state = {
      color: "red"
    }
  }


  colorChange = () => {
    console.log("you done pressed da button")
    this.setState({color:"yellow"})
  }

render(){
  let {color} = this.state

  return(
    <>
  <button onClick = {this.colorChange}>Color</button>
</>
    )
  }
}

export default Color