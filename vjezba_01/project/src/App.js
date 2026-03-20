import React, { useState } from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie";
import SearchParams from "./SearchParams";
import useDropdown from "./useDropdown";
import { movies } from "./MoviesList";
import Result from "./Result";
import Search from "./Search";

/* const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Movie, {
      name: "Matrix",
      genre: "SF",
      subgenre: "action",
    }),
    React.createElement(Movie, {
      name: "LOTR",
      genre: "SF",
      subgenre: "Fantazy",
    }),
    React.createElement(Movie, {
      name: "Purge",
      genre: "Horror",
      subgenre: "Thriller",
    }),
    React.createElement(Movie, {
      name: "Batman",
      genre: "Superhero",
      subgenre: "Action",
    }),
  ]);
}; */

const genres = [
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

const App = () => {
  const [genre, setGenre, Genreropdown] = useDropdown(genres);
  const [subgenre, setSubenre, Subgenreropdown] = useDropdown(subgenres[genre]);
  const [data, setData] = useState([]);
  /* function handleClick() {
    const data = movies.filter((item) => item.genre == genre);
    console.log(data);
    return data;
  } */

  function handleClick() {
    const dataSet = movies.filter((item) => item.genre == genre);
    setData(dataSet);
    console.log(dataSet);
  }

  //console.log(data);

  return (
    <div>
      <Genreropdown />
      {genre ? <Subgenreropdown /> : null}
      <b>{genre}</b>
      <b>{subgenre}</b>
      <br />
      <Movie name="Matrix" genre="SF" subgenre="Action" />
      <Movie name="Batman" genre="SF" subgenre="Action" />
      <Movie name="Purge" genre="Horror" subgenre="Thriller" />
      <Movie name="LOTR" genre="SF" subgenre="Fantazy" />
      <button onClick={handleClick}>submit</button>
      {data ? <Result data={data} /> : null}
    </div>
  );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
