import React, { Component } from 'react'
import menu from './components/menu' 

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      menu: ["Burger", "Fries", "Salad"]
    }
  }
  render () {
    return(
      <>
     <h1>Menu</h1>
      <menu />
      </>
    )
  }
}
export default App;
