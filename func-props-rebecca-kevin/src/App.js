import React,{Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
     foodList: [{item: "Bread", price: 2.29},
                {item: "Milk", price: 3.29},
                {item: "Eggs", price: 3.79},
                {item: "Chesse", price: 4.99},
                {item: "Bananas", price: 1.99}]
    
    }
  }

  render(){
    return(
      <>
        <h1>List of Foods</h1>
        <ul>
       {/* <li>{this.state.foodList.map (value => {
              return value }) }</li> */}
        <li>{this.state.foodList[0].item}</li>

        </ul>
       
      </>
    )
  }
}
export default App;
