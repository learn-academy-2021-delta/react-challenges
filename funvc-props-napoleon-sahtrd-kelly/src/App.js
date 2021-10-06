import React, { Component } from 'react'
import './App.css';
class App extends Component{
constructor(props){
  super(props)
    this.state = {
      foodItems:[
        {
          id:"apples"
          price:1.00
        },
        {
          id:"banana"
          price:1.50
        }, {
          id:"bread"
          price:2.00
        }, {
          id:"honey"
          price:2.50

        }, {
          id:"ottorpop"
          price:3.25
        }
        ]
    }
  }
}
  render(){

    return(<> <h1>Food Products</h1> </>)
  }
}







export default App;
