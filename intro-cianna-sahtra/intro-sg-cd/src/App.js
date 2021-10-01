import React, { Component } from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

class App extends Component{
  render(){
    return (
      <>
      <Bubble />
      <Header />
      <Content />
      <Footer />
      </>
    )
  }
}
class Bubble extends Component{
  render(){
    return (
      <p>Pop! We did it!</p>
    )
  }
}
export default App