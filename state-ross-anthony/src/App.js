import React, { Component } from 'react'
import Colors from './components/Colors'
import './App.css'
import Square from './components/Square'

class App extends Component{
  render(){
    return(
      <>
      <Colors />
      <Square />
      </>
    )
  }
}

export default App