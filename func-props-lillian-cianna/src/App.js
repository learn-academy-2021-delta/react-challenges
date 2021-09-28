import React, { Component } from 'react'

  class App extends Component {
    constructor (props) {
      super(props)
        this.state = {
          foodItems: ["milk", "eggs", "bread", "butter"]
  }
}
    render() {
        console.log(this.state.foodItems)
        return (
          <>
          <h1>Even Worse Instacart</h1>
          <h2>List of Food Choice</h2>
          <ul>
            {this.state.foodItems.map(value => {
            return <li>{value}</li>
            })}
          </ul>
          </>
  }
}

export default App;
