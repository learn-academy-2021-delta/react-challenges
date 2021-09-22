import React, { Component } from 'react'

class Header extends Component{
  render(){
    return (
        <>
      <h1>Top 5 tv shows</h1>
      <ul>
          <li>Lucifer</li>
          <p>Fantasy Crime show.</p>
          <li>Criminal Minds</li>
          <p>tv mystery and crime tv show with a hint of drama.</p>
          <li>The Haunting of Hill House</li>
          <p>Nightmare fuel.</p>
          <li>Clickbait</li>
          <p>Crime and mystery.</p>
          <li>Crime Scene at The Cecile Hotel</li>
          <p>Morbid documentary.</p>
      </ul>
        </>
    )
  }
}

export default Header