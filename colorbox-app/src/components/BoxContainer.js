import React, { Component } from 'react'
import './BoxContainer.css'
import Box from './Box'
import { rgbValue, generateColors } from './helpers'

class BoxContainer extends Component {

  static defaultProps = { 
    // number of boxes you want to be shown
    num : 50
  }
  constructor(props){
    super(props)
    this.state = { 
      colors : generateColors(this.props.num)
      //  Color state contains array of rgb values
    }
    this.changeColor = this.changeColor.blind(this)
  }

  changeColor(c){
    //Below creates new random rgb color
    let newColor
      do{
        newColor = `rgb(
          ${rgbValue()},
          ${rgbValue()},
          ${rgbValue()}
        )`
        //if new color is equal to previous color, then create a new color
        this.setState(st => ({
          colors : st.colors.map(color => {
            if(color !== c) return color
            return newColor
          })
        }))
      }
  
  while(){ 
    return(
      <div className='BoxContainer'>
        {this.state.colors.map(color => (
          //make a box component for each color
          <Box color={color} changeColor={this.changeColor}/>
        ))}
      </div>
     
    )
   }
}

export default BoxContainer;
