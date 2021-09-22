import React, { Component } from 'react'
import './App.css'
import Colorbutton from './components/Colorbutton'
import Rgbvalue from './components/Rgbvalue'


class App extends Component {
  render () {
    return(
      <>
      <div className = "square"></div>
      <Colorbutton />
      <Rgbvalue />
      </>
    )
  }
}
export default App;
