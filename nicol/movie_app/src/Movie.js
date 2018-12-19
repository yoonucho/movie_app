import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//Dumb Components  (state, 라이프사이클이 없음)

function Movie({ title, poster }) {
  return (
    <div>
      <h1>{title}</h1>
      <MoviePoster poster={poster} />
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

function MoviePoster({ poster }) {
  return <img src={poster} alt="Movie Poster" />;
}

// propType 확인방법
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
  //   poster: PropTypes.number.isRequired //에러
};

export default Movie;
