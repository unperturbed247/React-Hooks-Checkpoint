import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div style={{ margin: "20px auto", width: "60%", height: "400px" }}>
        <iframe
          width="100%"
          height="100%"
          src={movie.trailerLink}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">
        <button>⬅ Back to Home</button>
      </Link>
    </div>
  );
};

export default MovieDescription;
