import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"];

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/813dE2pH7XL._SY355_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81U3cu+0RAL._RI_.jpg",
  "https://resizing.flixster.com/dQKMU1lG417HWPtxFYuPvHkfhYE=/206x305/v1.bTsxMTE3NjY0NjtqOzE3OTk0OzEyMDA7MTQwMDsyMTAw",
  "https://m.media-amazon.com/images/M/MV5BMTUzNDY0NjY4Nl5BMl5BanBnXkFtZTgwNjY4MTQ0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg"
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
