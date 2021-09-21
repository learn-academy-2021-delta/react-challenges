import React, { Component } from 'react'
import Header from './components/Header'
import Favorites from './components/Favorites'

class Delta extends Component{
  render(){
    return(
      <>
        <Header />
        <Favorites />
      </>
    )
  }
}

export default Delta;
