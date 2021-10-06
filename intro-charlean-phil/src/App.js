import React, { Component } from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
import Footer from './Component/Footer'


class App extends Component{
  render(){
    return (
      <>
      document.title = 'my new title';
      <h1></h1>
      <Header/>
      <Content/>
      <Footer/>
      </>
    )
  }
}

export default App
