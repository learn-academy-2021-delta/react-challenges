import React, {Component} from 'react'


export default class RollLog extends Component {
  constructor() {
    super()
      this.state = {

      }
  }
  render() {
    return (
      <>
      <div onClick={this.props.click}>
      <h2>Rolled Dice Log</h1>
      <h3>{this.props.superman}</h3>
      </div>
      </>
    )
  }
}
