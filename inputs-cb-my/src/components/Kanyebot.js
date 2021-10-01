import React, { Component } from 'react'

class Kanyebot extends Component{

  render(){
    return(
      <>
       <h2>Kanyebot 5000 </h2>
       <div>{this.props.handleChange}</div>
        <p>I'm gonna let you finish, but BEYONCE is {this.props.input}!</p>
      </>
    )
  }
}
export default Kanyebot