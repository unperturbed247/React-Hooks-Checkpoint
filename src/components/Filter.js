import React from "react";

const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRateChange = (e) => {
    setFilter((prev) => ({ ...prev, rate: Number(e.target.value) }));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={handleTitleChange}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={handleRateChange}
        min="0"
        max="10"
        style={{ padding: "8px", width: "100px" }}
      />
    </div>
  );
};

export default Filter;
