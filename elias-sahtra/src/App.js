import React,{Component} from "react"
import Bad from "./components/Bad"
import Good from "./components/Good"
import Kanye from "./components/Kanye"
class App extends Component{
 constructor(props){
   super(props)
   this.state={
     userInput:""

   }
 }
 handleChange = (e)=>{
   this.setState({userInput:e.target.value})
 }
 render(){
   return(
     <>
     <h1>Listening robot</h1>
     <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
     <p >{this.state.userInput}</p>
     <Good handleChange={this.handleChange} input={this.state.userInput}/>
     
     <Bad handleChange={this.handleChange}input={this.state.userInput}/>
     <Kanye handleChange={this.handleChange}input={this.state.userInput}/>


     </>
   )
 }
}
export default App