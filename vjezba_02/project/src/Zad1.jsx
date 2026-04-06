import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown";

const categories = ["Hygiene", "Electronics", "Food", "Household"];

// category -> subcategories -> products[]
const data = {
  Hygiene: {
    "Hair Care": ["Shampoo", "Conditioner"],
    "Oral Care": ["Toothpaste", "Mouthwash"],
    "Body Care": ["Soap", "Body Wash", "Deodorant"],
  },
  Electronics: {
    Charging: ["Cables", "Chargers", "Power Banks"],
    Audio: ["Headphones", "Earbuds"],
    Accessories: ["USB Drives", "Adapters"],
  },
  Food: {
    Snacks: ["Chips", "Pretzels", "Popcorn"],
    Beverages: ["Soda", "Juice", "Water"],
    Frozen: ["Frozen Pizza", "Ice Cream"],
    Produce: ["Apples", "Bananas", "Salad"],
    Canned: ["Beans", "Soup", "Tuna"],
    Bakery: ["Bread", "Croissants", "Muffins"],
  },
  Household: {
    Cleaning: ["Cleaning Supplies", "Laundry Detergent"],
    Kitchen: ["Kitchen Tools", "Storage Boxes"],
    Lighting: ["Light Bulbs"],
    Batteries: ["AA Batteries", "AAA Batteries"],
  },
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hygiene");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Hair Care");
  const [filteredProducts, setFilteredProducts] = useState([
    "Shampoo",
    "Conditioner",
  ]);

    const subcategories = Object.keys(data[selectedCategory]);

  // useEffect() hook (function_to_do_if_notice_update, variable to watch )

  useEffect(() => { // reset subcategory when changing category
    setSelectedSubcategory(subcategories[0]);
  }, [selectedCategory]);

  useEffect(() => { // filter
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
