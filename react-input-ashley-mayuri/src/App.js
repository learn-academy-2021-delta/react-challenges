import React, { Component } from 'react'
 class App extends Component {
constructor (){
super()
  this.state={
    userInput: ""
  }

}
handleChange = (e) => {
  console.log(e);
this.setState({userInput: e.target.value})

}
   render(){
   return (
     <>
     < h1><u>Robo Active Listening</u></h1>
     
     <input type = "text"
     value= {this.state.userInput}
     onChange= {this.handleChange}/> 
    
     <h3><u>Good Robot</u></h3>
     <p1>I hear you saying "{this.state.userInput}". Is that correct</p1>
     <h3><u>Bad Robot</u></h3>
     <p1>I hear you saying {this.state.userInput.split("").map((value)=>{
     if(value   === value) {return "BLA"}else{return value}})} Is that correct?</p1>
     <h3><u>Kanyebot 5000</u></h3>
     <p1>I'm gunna let you finish but Beyonce is "{this.state.userInput}".</p1> 
    
     </>
    
   )
 }
}
export default App