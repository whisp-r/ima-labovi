import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown";

const App = () => {
  const [data, setData] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // category -> subcategories -> products[]
  useEffect(() => {
    fetch("http://127.0.0.1:4444/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);

        const firstCategory = Object.keys(json)[0];
        const firstSubcategory = Object.keys(json[firstCategory])[0];

        setSelectedCategory(firstCategory);
        setSelectedSubcategory(firstSubcategory);
        setFilteredProducts(json[firstCategory][firstSubcategory]);

        setDataIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  // workaround for react hook issues of early return
  if (!dataIsLoaded) {
    useEffect(() => {
      return;
    }, [selectedCategory]);
    useEffect(() => {
      return;
    }, [selectedSubcategory]);
    return <h1>Loading...</h1>;
  }

  const categories = Object.keys(data);
  const subcategories = Object.keys(data[selectedCategory]);

  useEffect(() => {
    // reset subcategory when changing category
    setSelectedSubcategory(subcategories[0]);
  }, [selectedCategory]);

  useEffect(() => {
    // filter
    setFilteredProducts(data[selectedCategory][selectedSubcategory]);
  }, [selectedSubcategory]);

  return (
    <div>
      <h1>Shopping Mart</h1>

      <div>
        <h3>Select Category:</h3>
        <Dropdown
          options={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <div>
        <h3>Select Subcategory:</h3>
        <Dropdown
          options={subcategories}
          value={selectedSubcategory}
          onChange={setSelectedSubcategory}
        />
      </div>

      <div>
        <h2>Selected:</h2>
        <p>
          <strong>Category:</strong> {selectedCategory}
        </p>
        <p>
          <strong>Subcategory:</strong> {selectedSubcategory}
        </p>
        <p>
          <strong>Products:</strong> {filteredProducts.join(", ")}
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
