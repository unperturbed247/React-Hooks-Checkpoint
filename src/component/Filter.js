import React, { useState } from "react";

const Filter = ({ handleFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleChange = () => {
    handleFilter({ title, rating });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button onClick={handleChange}>Filter</button>
    </div>
  );
};

export default Filter;
