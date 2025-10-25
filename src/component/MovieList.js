import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, filter }) => {
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
