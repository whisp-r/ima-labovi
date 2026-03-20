import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movie";
import Dropdown from "./Dropdown";

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

const App = () => {
  const [genre, setGenre, Layout] = Dropdown();
  return (
    <div>
      <Movie name="Matrix" genre="SF" subgenre="Action" />
      <Movie name="Batman" genre="SF" subgenre="Action" />
      <Movie name="Purge" genre="Horror" subgenre="Thriller" />
      <Movie name="LOTR" genre="SF" subgenre="Fantazy" />
      <Layout />
      <h1>{genre}</h1>
    </div>
  );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
