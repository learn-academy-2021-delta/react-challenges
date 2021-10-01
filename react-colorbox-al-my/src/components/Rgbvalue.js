import React, { Component } from 'react'

class Colorbutton extends Component{
  constructor(props){
    super(props)

const rgbValue = () => {
  return Math.floor(Math.random() * 256)
}

// Method generates an array of rgb colors
const colorGenerator = (num) => {
  let colors = []

  for(let i=0; i<num; i++){
    const red = rgbValue()
    const blue = rgbValue()
    const green = rgbValue()
    colors.push(`rgb(${red},${blue},${green})`)
  }
  return colors
}

export default Rgbvalue
