import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {movies.length > 0 ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <p style={{ color: "#888" }}>No movies found 😢</p>
      )}
    </div>
  );
};

export default MovieList;
