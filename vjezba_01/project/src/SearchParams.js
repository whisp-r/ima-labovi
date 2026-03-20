import React, { useState, useEffect } from "react";

const moviesGenres = [
  "SF",
  "Action",
  "Horror",
  "Comedy",
  "Drama",
  "British",
  "Tragedy",
];

const subgenres = {
  SF: ["Super Hero SF", "Fantazy SF", "Action SF"],
  Action: ["British Action", "Car chase Action", "SF Action", "Crime Action"],
  Horror: [
    "Thriller horror",
    "Zombie horror",
    "Psychological horror",
    "Comedy horror",
  ],
  Comedy: ["Romantic Comedy", "Black Comedy", "Satiric Comedy"],
  Drama: ["Melodrama", "Family Drama"],
  British: ["Action British", "Cpmedy British"],
  Tragedy: ["Familiy", "War Tragedy", "Psychological Tragedy"],
};

const SearchParams = () => {
  const [genre, setGenre] = useState("all");
  function getSubgenres() {
    subgenres[genre];
  }
  useEffect(() => {
    getSubgenres();
  }, [genre]);

  console.log(subgenres[genre]);

  return (
    <div>
      <h1>{genre}</h1>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option>All</option>
        {moviesGenres.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select>
        <option>all</option>
        {subgenres[genre]
          ? subgenres[genre].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default SearchParams;
