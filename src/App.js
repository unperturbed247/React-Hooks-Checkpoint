import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51oD4N4x8UL._AC_.jpg",
      rating: 9,
    },
    {
      title: "Breaking Bad",
      description: "A chemistry teacher turns to cooking meth.",
      posterURL: "https://m.media-amazon.com/images/I/81MZ+YbB9EL._AC_SL1500_.jpg",
      rating: 10,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rate: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rate
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🎥 My Movie App</h1>
      <Filter setFilter={setFilter} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
