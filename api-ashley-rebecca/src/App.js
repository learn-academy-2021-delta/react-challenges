import React, { Component} from 'react'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
ip: ""
    }
  }


getIP = () => {
fetch("https://ipapi.co/json/")
.then(kitty => kitty.json())
.then(payload => this.setState({ip: payload}))
  }

  render() {
    return(
      <>
      <h2>Get Your IP Here</h2>
      <button onClick={this.getIP}>Click Me!</button>
      <h4>{this.state.ip.ip}</h4>
      <h4>{this.state.ip.city}</h4>
      <h4>{this.state.ip.country}</h4>
      <h4>{this.state.ip.country_area}</h4>
      
      </>
    )
  }
}
export default App