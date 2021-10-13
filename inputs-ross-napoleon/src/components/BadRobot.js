import React, { Component } from 'react'

class BadRobot extends Component {
  render() {
    return (
      <>
        <h3>
        {this.props.badProp}
        </h3>
      </>
    )
  }
}
export default BadRobot