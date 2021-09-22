import React, {Component} from 'react'

class Square extends Component{
    constructor(props){
        super(props)
        this.state={
          color:"purple",
          colorArray: ["red", "blue", "green"," yellow","orange", "purple"],
          count: -1,
        }
    }

    changeColor = () => {
      let newCount = this.state.count + 1;
      this.setState({color:this.state.colorArray[newCount], count: newCount})

      // for(this.state.count = 0; this.state.count < this.state.colorArray.length; this.state.count++){}

    }

  render(){
    return(
      <>
        <div className = "square" onClick={this.changeColor} 
        style={{background:this.state.color}}>
          <p>{this.state.color}</p>
        </div>
        <div>
          <button onClick = {this.state.color}>Add</button>
          <button onClick = {this.state.color}>Remove</button>
        </div>
      </>
    )
  }
}


export default Square;
