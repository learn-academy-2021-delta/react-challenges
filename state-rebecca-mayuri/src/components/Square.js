import React, {Component} from 'react'


class Square extends Component{
    constructor(props){
        super(props)
        this.state={
            color:"purple",
            colorArray : ["red", "blue", "green"," yellow","orange", "purple"]


        }
    }

    changeColor=()=>{
      //for(let i=0; i<colorArray.length; i++){
        this.setState({color:this.state.colorArray[0]})  
      //}
    
    }
  render(){
    return(
      <>
      <div className = "square" onClick={this.changeColor} 
      style={{color:this.state.color}}>
          <p>{this.state.color}</p>
        
      </div>
      </>
    )
  }
}


export default Square;
