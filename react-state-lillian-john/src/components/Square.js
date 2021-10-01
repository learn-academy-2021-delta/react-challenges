import React, { Component } from 'react'

class Square extends Component {
  constructor(props){
    super(props)
    this.state = {
      white: "white",
      purple: "purple",
      green: "green"
    }
  }


colorName = () => {
  this.setState({colors: this.state})
}

  render (){
    return (
      <>
        <button onClick = {this.colorName}>
          <div className="square">
            <p>{this.state.white}</p>
          </div>
        </button>
      </>
    )
  }
}

export default Square
