import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newMovie.title || !newMovie.posterURL || !newMovie.rating) {
      alert("Please fill in the required fields!");
      return;
    }
    addMovie({ ...newMovie, rating: Number(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
        style={{ padding: "8px", margin: "5px" }}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        style={{ padding: "8px", margin: "5px" }}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        style={{ padding: "8px", margin: "5px" }}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleChange}
        style={{ padding: "8px", margin: "5px", width: "90px" }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "8px 15px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
