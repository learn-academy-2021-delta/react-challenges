import React, {Component} from 'react'
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import './App.css'


class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <>
        <Dice />
        <Rolls />
      </>
    )
  }
}

export default App;
