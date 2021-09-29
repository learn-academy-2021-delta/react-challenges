import React, {Component} from 'react'
import List from './components/List'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
        fruits: [
          {item: "banana", cost: 0.75},
          {item: "apple", cost: 0.25},
          {item: "orange", cost: 0.90},
          {item: "pineapple", cost: 2.75}
        ],
      cart: []
    }
  }

  addItem = (item) => {
        this.setState({cart: [...this.state.cart, item]})
      }

  render(){
    return(
      <>
        <h1>Fill your basket</h1>
        <h3>Do you want fruit? </h3>
        <ul>
          {this.state.fruits.map(fruit => {
            return <li>{this.state.fruits.item}: {this.state.fruits.cost}</li>
          })}
        </ul>
      <List cartItem={this.state.fruits}/>
      <h3>Cart Items</h3>
      
      <ul>
        {this.state.cart.map((value, index) => {
          return <li key={index}>{value} </li>
        })}
      </ul>
      </>
    )
  }
}
export default App
