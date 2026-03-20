import React, { useState } from "react";

const genres = [
  "SF",
  "Action",
  "Horror",
  "Comedy",
  "Drama",
  "British",
  "Tragedy",
];

const Search = () => {
  const [genre, setGenre] = useState("default");
  console.log(genre);

  return (
    <div>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option>all</option>
        {genres.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

/* const Search = () => {
  const [genre, setGenre] = useState("default");
  console.log("genre state:", genre);

  return (
    <div>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option>all</option>
        {genres.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}; */

export default Search;
