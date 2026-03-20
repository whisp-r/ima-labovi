import React, { useEffect } from "react";
import Movie from "./Movie";

const Result = (props) => {
  return (
    <div>
      {props.data.map((item) => (
        <Movie
          key={item.id}
          name={item.title}
          genre={item.genre}
          subgenre={item.subgenre}
        />
      ))}
    </div>
  );
};

export default Result;
