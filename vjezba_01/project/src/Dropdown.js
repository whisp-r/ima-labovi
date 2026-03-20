import React, { useState } from "react";

const Dropdown = () => {
  const moviesGenres = ["drama", "SF", "Familie", "Horror"];
  const [genre, setGenre] = useState("genre");
  return [
    genre,
    setGenre,
    () => (
      <div>
        <select onChange={(e) => setGenre(e.target.value)}>
          {moviesGenres.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    ),
  ];
};

export default Dropdown;
