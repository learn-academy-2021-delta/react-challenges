import React, { Component } from 'react'
// import './App.css'
import Rgbvalue from './components/Rgbvalue'

class Colorbutton extends Component {
  static defaultProps = {
    boxNum: 10
  }
  constructor(props) {
    super(props)
    this.state = {
      // colorChange: white,
      // colors: colorGenerator(this.props.boxNum)
      // color1: "pink",
      // color2: "red",
      // color3: "orange",
      // color4:"blue",
      // color5:"purple",
      // color6: "yellow",
      // color7: "brown",


    }
    this.colorChange = this.colorChange.bind(this)
  }
  colorChange(c){
    let newColor
    do{
      newColor = `rgb(
      ${rgbValue()},
      ${rgbValue()},
      ${rgbValue()}
    )`
  } while(newColor === c)

  this.setState(st => ({
    colors : st.colors.map(color => {
      if(color !== c) return color
      return newColor
    })
  }))

  }


  render(){
    return(
      <div className='Colorbutton'>
      {this.state.colors.map(color => (
        <Box color={color} colorChange = {this.colorChange}/>
      ))}
      </div>
      // <h1>Color: {this.colorChange}</h1>
      // <button onClick ={{color1: this.state.color1}}></button>
      // </>
    )
  }
}

export default Colorbutton
