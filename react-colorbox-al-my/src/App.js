import React, { Component } from 'react'
import './App.css'
import Colorbutton from './components/Colorbutton'


class App extends Component {
  render () {
    return(
      <>
      <div className = "square"></div>
      <Colorbutton />
      </>
    )
  }
}
export default App;
