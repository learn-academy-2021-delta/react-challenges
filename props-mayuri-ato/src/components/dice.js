import React, { Component } from 'react'

export default class Dice extends Component {
    render(){
    return (
        <>
       
        <h1>I just rolled a</h1>
        <h1>{this.props.roll}</h1>
        </>
    )
    }
} 