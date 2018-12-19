import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate()-> render() -> componentDidMount()

  state = {};

  // 리스트를 하나 추가하고 싶다면
  componentDidMount() {
    // fetch가 좋은 이유 url을 ajax로 심플하게 불러올 수 있어서
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      //   .then(response => console.log(response))
      .then(response => response.json())
      .then(json => console.log(json))
      //catch를 써서 에러가 나면 잡아서 설명해라.
      .catch(err => console.log(err));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
