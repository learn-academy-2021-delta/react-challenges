import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  render(){
    return(
      <>
        <h1>A Basic Class Component</h1>
        <Square />
      </>
    )
  }
}

export default App