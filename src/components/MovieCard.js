import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        margin: "10px",
        backgroundColor: "#222",
        color: "#fff",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}/10</p>
    </div>
  );
};

export default MovieCard;
