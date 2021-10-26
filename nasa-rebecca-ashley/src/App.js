import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       podInfo: "",
       
    }
  }

  //Get pic for today
  //https://api.nasa.gov/planetary/apod?thumbs=true&api_key=DEMO_KEY
  //https://api.nasa.gov/planetary/apod?thumbs=true&date=2021-10-25&api_key=DEMO_KEY
  getPic = () =>{
    fetch("https://api.nasa.gov/planetary/apod?thumbs=true&api_key=DEMO_KEY")
    .then(space => space.json())
    .then(rocket => this.setState({podInfo: rocket}))
  }

  getPicByDate = () =>{
    let url = "https://api.nasa.gov/planetary/apod?thumbs=true&api_key=DEMO_KEY";
    //find a way to save user input (probably to a this.state key)
    //find a way to concatenate "&date=" + userdate and then add to fetch
    

    fetch(newUrl)
    .then(space => space.json())
    .then(rocket => this.setState({podInfo: rocket}))
  }


  renderMedia = () =>{

    //if video -> render video
    if(this.state.podInfo && this.state.podInfo.media_type === "video"){ //if podInfo not empty
      return( 
      <div>
        <a href = {this.state.podInfo.url}> URL to Video</a>
        <div />
        <iframe title ={this.state.podInfo.title} src={this.state.podInfo.url}></iframe>
      </div>
      )
    }

    //else if picture -> render url
    else if(this.state.podInfo && this.state.podInfo.media_type === "image"){
      return(
        <div>
          <a href = {this.state.podInfo.url}> URL to Picture </a>
          <div />
          <img src={this.state.podInfo.url} alt={this.state.podInfo.title}></img>
        </div>
      )
    }

    else if(this.state.podInfo){
      return "Something went wrong! Try again."
    }
  }

  render() {
    return (
      <>
        <div >
          <h1>Get Your NASA Daily Pic</h1>
          <button onClick = {this.getPic}> Click here! </button>


          {/* https://github.com/learn-academy-2021-delta/Syllabus/blob/main/react/forms.md */}
          <h1>Get your NASA Daily Pic by Date</h1>
          <form>
            <label>
              Date (YYYY-MM-DD): 
              <input 
                type="text" date="date"/> 
            </label>
            <button onClick = {this.getPicByDate}>Submit</button>
          </form>

          <div />
          <div />
          {this.renderMedia()}
          <h4>{this.state.podInfo.explanation}</h4>
          <h4>{this.state.podInfo.date}</h4>


        </div>
      </>
    )
  }
}

//10-26-2021 image
//"https://api.nasa.gov/planetary/apod?thumbs=true&api_key=DEMO_KEY"
//{"copyright":"JL Dauvergne Music:","date":"2021-10-26","explanation":"Observe the graceful twirl of our Solar System's largest planet. Many interesting features of Jupiter's enigmatic atmosphere, including dark belts and light zones, can be followed in detail. A careful inspection will reveal that different cloud layers rotate at slightly different speeds. The famous Great Red Spot is not visible at first -- but soon rotates into view. Other smaller storm systems occasionally appear. As large as Jupiter is, it rotates in only 10 hours. Our small Earth, by comparison, takes 24 hours to complete a spin cycle. The featured high-resolution time-lapse video was captured over five nights earlier this month by a mid-sized telescope on an apartment balcony in Paris, France.  Since hydrogen and helium gas are colorless, and those elements compose most of Jupiter's expansive atmosphere, what trace elements create the observed colors of Jupiter's clouds remains a topic of research.    Discovery + Outreach: Graduate student research position open for APOD","media_type":"video","service_version":"v1","thumbnail_url":"https://img.youtube.com/vi/QSXgDiS2H_A/0.jpg","title":"Jupiter Rotates","url":"https://www.youtube.com/embed/QSXgDiS2H_A?rel=0"}

//10-25-2021
//https://api.nasa.gov/planetary/apod?thumbs=true&date=2021-10-25&api_key=DEMO_KEY
//{"copyright":"Michael Abramyan","date":"2021-10-25","explanation":"Does the road to our galaxy's center go through Monument Valley? It doesn't have to, but if your road does -- take a picture. In this case, the road is US Route 163 and iconic buttes on the Navajo National Reservation populate the horizon.  The band of Milky Way Galaxy stretches down from the sky and appears to be a continuation of the road on Earth. Filaments of dust darken the Milky Way, in contrast to billions of bright stars and several colorful glowing gas clouds including the Lagoon and Trifid nebulas. The featured picture is a composite of images taken with the same camera and from the same location -- Forest Gump Point in Utah, USA. The foreground was taken just after sunset in early September during the blue hour, while the background is a mosaic of four exposures captured a few hours later.    Discovery + Outreach: Graduate student research position open for APOD","hdurl":"https://apod.nasa.gov/apod/image/2110/MonumentValleyRoad_Abramyan_2048.jpg","media_type":"image","service_version":"v1","title":"Road to the Galactic Center","url":"https://apod.nasa.gov/apod/image/2110/MonumentValleyRoad_Abramyan_960.jpg"}