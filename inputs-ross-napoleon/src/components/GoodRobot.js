import React, { Component } from 'react'

class GoodRobot extends Component {
  render() {
    return (
      <>
        <h3>
        {this.props.goodProp}
        </h3>
      </>
    )
  }
}
export default GoodRobot


        // { <ul>
        //   {this.props.cartItem.map((value, index) => {
        //     return (
        //       <li key={index}>
        //         <button onClick={() => this.props.addItem(value)}>
        //           {value}
        //         </button>
        //       </li>
        //     )
        //   })}
        // </ul> }