import React from "react";
import { movies } from "../data";

function Movies() {
  return(
  <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => {
      return(
        <div key={index}>
          <h1>{movie.title} time: {movie.time}</h1>
          <ul>
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
          </div>
      )
    })}
  </div>
  )
}

export default Movies;
