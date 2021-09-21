import React, { Component } from 'react'
import Header from './Header'
import Ross from './components/Ross'
import Footer from './Footer'
class App extends Component{
  render(){
    return (
      <>
        <Header />
        <Ross />
        <Footer />
      </>
    )
  }
}

export default App