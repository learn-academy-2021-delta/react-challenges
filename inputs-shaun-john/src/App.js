import React, { Component } from 'react'
import goodRobot from './goodRobot.png';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({userInput: e.target.value})
  }
  
  
  render() {
    return (
      <>
        <h1>Robot Active Listening</h1>
        <input type="text" 
               value={this.state.userInput}
               onChange={this.handleChange} 
        />
        <h4><img alt="" src={goodRobot} /> Good Robot</h4>
        <div className="paddingRight">
          I hear you saying {this.state.userInput}
        </div>
        <h4><img alt="" src="goodRobot.png" /> Bad Robot</h4>
        <div className="paddingRight">
          I hear you saying {this.state.userInput}
        </div>
        <h4><img alt="" src="goodRobot.png" /> WillFerrelbot 5000</h4>
        <div className="paddingRight">
          I hear you saying {this.state.userInput}
        </div>
        
        <h1>
        {this.state.userInput.split("").map((value) => {

          if(value === "e") {
            return "3"
          }
          
          else {
            return value
          }
          
        })}
        </h1>
      </>
    )
  }
}
