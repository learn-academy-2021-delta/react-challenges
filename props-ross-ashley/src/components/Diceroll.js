import React, {Component} from 'react'


export default class Diceroll extends Component {
  constructor() {
    super()
      this.state = {

      }
  }
  render() {
    return (
      <div onClick={this.props.click}>
      <h1>Click for rolled dice value</h1>
      <h1>{this.props.superman}</h1>
      </div>
    
    )
  }
}
