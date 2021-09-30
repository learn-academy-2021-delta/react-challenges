import React, { Component } from 'react';
import Domo from './components/Domo'
import MrRoboto from './components/MrRoboto'
import Arigato from './components/Arigato'
  
  class App extends Component {
    constructor(){
      super()
      this.state = {
        userInput: ""
      }
    }
    handleChange = (e) => {
      console.log(e)
      this.setState({userInput: e.target.value})
    }

    render() {
      return (
        <>
         <h1>Hello World</h1>
         <input type= "text"
                value= {this.state.userInput}
                onChange={this.handleChange}
         />
         <h1>Robots</h1>
         <Domo />
         <MrRoboto />
         <Arigato />
        </>
      );
    }
  }
  
  export default App;