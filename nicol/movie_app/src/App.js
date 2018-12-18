import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate()-> render() -> componentDidMount()

  state = {
    greeting: "Hello!",
    movies: [
      {
        title: "Matrix",
        poster:
          "https://images-na.ssl-images-amazon.com/images/I/813dE2pH7XL._SY355_.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster:
          "https://images-na.ssl-images-amazon.com/images/I/81U3cu+0RAL._RI_.jpg"
      },
      {
        title: "Oldboy",
        poster:
          "https://resizing.flixster.com/dQKMU1lG417HWPtxFYuPvHkfhYE=/206x305/v1.bTsxMTE3NjY0NjtqOzE3OTk0OzEyMDA7MTQwMDsyMTAw"
      },
      {
        title: "Star Wars",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTUzNDY0NjY4Nl5BMl5BanBnXkFtZTgwNjY4MTQ0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg"
      }
    ]
  };
  // 리스트를 하나 추가하고 싶다면
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          // 전체 영화 리스트
          ...this.state.movies,
          {
            title: "Transpotting",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjZTfWogMeMsXcxRd3eOcYs1ijuJDeKUSWRDoIj6v-96VQHcq1A"
          }
        ]
      });
    }, 5000);
  }
  render() {
    console.log("did render");
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
