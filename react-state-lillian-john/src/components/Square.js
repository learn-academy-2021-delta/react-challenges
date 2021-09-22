import React, { Component } from 'react'

class Square extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: "white"
    }
  }
colorName = () => {
  this.setState{{colors: this.state.colors}}
}

  render (){
    return (
      <>
      <button>
      <div className="square">
      white
      </div>
      </button>
      </>
    )
  }
}


export default Square
