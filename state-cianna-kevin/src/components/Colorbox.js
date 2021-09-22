import React, { Component } from 'react'

class Colorbox extends Component{
    constructor(props){
      super(props)
      this.state = {
        colors: ["white", "green", "blue", "yellow", "red", "purple", "orange"]
      };
    }
    // displayColor = () => {
    //     console.log("you clicked me")
    //   this.setState({color: "red"})
    // }
    changeBg() {
        const { colors } = this.state;
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = color;
        }
    }
    render(){
      return(
        <>
          <h1>A Basic Class Component</h1>
          <div className="square" onClick = {this.changeBg()>
              <p>{this.state.colors}</p>
          </div>
        </>
      )
    }
}
  
  export default Colorbox