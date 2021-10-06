import React, { Component } from 'react' // use rcc to start basic code layout
import Dice from './component/Dice' //After creating components folder and creating 
import Rolls from './component/Rolls'     // Dice and Rolls class files, import them ex component/Dice
                // import Apps.css when complete

//Now add class
class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <>
      <Dice />
      <Rolls />
      </>
    )
  }
}
export default App;
  




// As a developer, I can create a React application with App.js as my stateful component
// As a developer, I can create two child components that will accept props from App.js
// As a user, I can click a box and see the outcome of my current "roll"
// As a developer, I can pass a method from App.js to my dice component to display a number between 1 and 6
// As a user, I can see my roll logged
// As a developer, I can pass the value of the roll to a log component
// As a user, I can see the roll log continue to grow as I roll the dice
// Stretch Goals
// As a user, I can see the image of a dice face when I "roll" the dice
// As a user, I can click a restart button that clears my roll log