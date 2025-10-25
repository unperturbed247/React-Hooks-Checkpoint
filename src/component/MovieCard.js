import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img src={movie.posterURL} alt={movie.title} width="100%" height="300px" />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      <Link to={`/movie/${movie.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default MovieCard;
