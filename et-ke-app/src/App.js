import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      nasaObj: {}
    }
  }

  getIP = () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=zGQZ72oIrUwQxVffabWUFsCDFrpLVXXklgKd7XWW")
    .then(response => response.json())
    .then(payload => this.setState({nasaObj: payload}))
  }
  render(){
    console.log(this.state.nasaObj.img_src)
    return(
      <>
        <h1>External API</h1>
        <button onClick={this.getIP}>Click Me!</button>
      <div className="nasa-photo">
        <img 
        src={this.state.nasaObj.img_src}
        alt={this.state.nasaObj.full_name}
        />
      </div>
        
      </>
    )
  }
}

export default App