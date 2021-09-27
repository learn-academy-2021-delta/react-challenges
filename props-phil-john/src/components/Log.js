import React, { Component } from 'react'

class Log extends Component{
    render() {
      return(
        <>
          <h1>Rolls { this.props.die }</h1>
        </>
      )
    }
  }
  
  export default Log