import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate()-> render() -> componentDidMount()

  state = {};

  // 리스트를 하나 추가하고 싶다면
  componentDidMount() {
    this._getMovies();
    //   .then(response => console.log(response))
    //   .then(json => {
    // 	  this.setState({
    // 		  movies: json.data.movies
    // 	  })
    // 	  .then(()=> .then())
    // 	  // CALLBACK HELL!
    //   })
    //catch를 써서 에러가 나면 잡아서 설명해라.
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
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
