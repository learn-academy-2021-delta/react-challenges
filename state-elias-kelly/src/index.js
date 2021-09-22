import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from "./App" 
import About from "./components/about"
import Content from "./components/Content"
import Footer from "./components/Footer"

class Hello extends Component{
  render(){
    return (
      <>
      <App />
      <About />
      <Content />
      <Footer />
      </>
    )
  }
}

ReactDOM.render(
  <Hello />, document.querySelector("#root")
)