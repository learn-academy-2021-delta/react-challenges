import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: "",
      photo: ""
    }
  }

  changeDate = e => {
      e.preventDefault();
      let dateFromInput = e.target[0].value;
      this.setState({ date: dateFromInput });
      this.getPhoto(dateFromInput);
    };

    componentDidMount() {
      fetch('https://api.nasa.gov/planetary/apod?api_key=F4N2nhSKUlQcg0YUuOZhPZpgn2XQ65SGBl0cqc3P')
        .then(response => response.json())
        .then(json => this.setState({ photo: json }));
    }

    getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
    };

  render() {
    return (
      <div>
        <h1>What a Wonderful World!</h1>
        <h2>Want to see what was happening outside of your hemisphere?</h2>
        <DateInput changeDate={this.changeDate}/>
        <Photo photo={this.state.photo}/>
      </div>
    );
  }
}

export default App;
