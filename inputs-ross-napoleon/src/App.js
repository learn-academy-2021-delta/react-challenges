import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
    }
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({userInput: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Listening Robots</h1>
        
        <input type="text"
          // value="I hear you saying xyzzy. Is that correct?"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <h2>Good Robot:</h2>
        <GoodRobot 
          goodProp={this.state.userInput}
        />
        

        <h2>Bad Robot:</h2>
        <BadRobot 
          badProp={this.state.userInput.split("").map((value, index) => {
            if (index === 0 || index % 3 === 0) {
              return value = "B"
            } else if (index === 1 || index % 3 === 1) {
              return value = "L"
            } else if (index === 2 || index % 3 === 2) {
              return value = "A "
            // } else if (index % 3 === 0) {
            //   return value = "B"
            // } else if (index % 3 === 1) {
            //   return  value = "L"
            // } else if (index % 3 === 2) {
            //   return value = "A "
            }
          })}
        />
        {/* <input type="text"
          //value="I hear you saying blabl. Is that correct?"
          value={this.state.userInput}
          onChange={this.handleChange}
        /> */}
        
        <h2>Kanye-Bot 5000:</h2>
        <KanyeBot
          kanyeProp={this.state.userInput.split("").map((value, index) => {
            if (index === 0 || index % 11 === 0) {
              return value = "Y"
            } else if (index === 1 || index === 2 || index % 11 === 1 || index % 11 === 2) {
              return value = "e"
            // } else if (index === 2) {
            //   return value = "e"
            } else if (index === 3 || index % 11 === 3) {
              return value = "z"
            } else if (index === 4 || index % 11 === 4) {
              return value = "u"
            } else if (index === 5 || index === 10 || index % 11 === 5 || index % 11 === 10) {
              return value = "s "
            } else if (index === 6 || index % 11 === 6) {
              return value = "W"
            } else if (index === 7 || index % 11 === 7) {
              return value = "a"
            } else if (index === 8 || index % 11 === 8) {
              return value = "l"
            } else if (index === 9 || index % 11 === 9) {
              return value = "k"
            // } else if (index === 10) {
            //   return value = "S "
            // } else if (index % 11 === 0) {
            //   return value = "Y"
            // } else if (index % 11 === 1) {
            //   return value = "E"
            // } else if (index % 11 === 2) {
            //   return value = "E"
            // } else if (index % 11 === 3) {
            //   return value = "Z"
            // } else if (index % 11 === 4) {
            //   return value = "U"
            // } else if (index % 11 === 5) {
            //   return value = "S "
            // } else if (index % 11 === 6) {
            //   return value = "W"
            // } else if (index % 11 === 7) {
            //   return value = "A"
            // } else if (index % 11 === 8) {
            //   return value = "L"
            // } else if (index % 11 === 9) {
            //   return value = "K"
            // } else if (index % 11 === 10) {
            //   return value = "S "
            }
          })}
        />
        {/* <input type="text"
        //value="I'm going to finish but Beyonce is xyzzy"
        value={this.state.userInput}
        onChange={this.handleChange}
        /> */}      

      </>
    )
  }
}
export default App