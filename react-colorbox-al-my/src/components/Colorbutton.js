import React, { Component } from 'react'

class Colorbutton extends Component {
  static defaultProps = {
    boxNum: 10
  }
  constructor(props) {
    super(props)
    this.state = {
      colors: colorGenerator(this.props.boxNum)
      // color1: "pink",
      // color2: "red",
      // color3: "orange",
      // color4:"blue",
      // color5:"purple",
      // color6: "yellow",
      // color7: "brown",


    }
    this.colorChange = this.colorChange.bind(this)
  }

  render(){
    return(
      <>
      <button onClick ={{color1: this.state.color1}}></button>
      </>
    )
  }
}

export default Colorbutton
