import React, { Component } from "react";
import PropTypes from "prop-types";
import LinesElipsis from "react-lines-ellipsis";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="Movie">
        <div className="Movie__Column">
          <MoviePoster poster={this.props.poster} />
        </div>
        <div className="Movie__Column">
          <h1>{this.props.title}</h1>
          <div className="Movie__Genres">
            {this.props.genres.map((genre, index) => (
              <MovieGenre genre={genre} key={index} />
            ))}
          </div>
          <div className="Movie_Synopsis">
            <LinesElipsis
              text={this.props.synopsis}
              maxLine="3"
              elipsiis="..."
              trimRight
              basedOn="letters"
            />
          </div>
        </div>
      </div>
    );
  }
}
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  };
  render() {
    return (
      <img
        className="Movie__Poster"
        src={this.props.poster}
        alt="MoviePoster"
      />
    );
  }
}

class MovieGenre extends Component {
  static propTypes = {
    genre: PropTypes.string.isRequired
  };
  render() {
    return <span className="movie__Genre">{this.props.genre}</span>;
  }
}
export default Movie;
