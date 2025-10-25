import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";
import Filter from "./component/Filter";
import MovieDescription from "./component/MovieDescription";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A skilled thief enters dreams to steal secrets.",
      posterURL: "https://m.media-amazon.com/images/I/51xJd+1Oq-L._AC_SY679_.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Avatar",
      description: "A marine on an alien planet torn between two worlds.",
      posterURL: "https://m.media-amazon.com/images/I/41vuP4z4m6L._AC_SY679_.jpg",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY",
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);
  };

  const handleFilter = (filterData) => {
    setFilter(filterData);
  };

  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>🎬 My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter handleFilter={handleFilter} />
                <AddMovie addMovie={addMovie} />
                <MovieList movies={movies} filter={filter} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
