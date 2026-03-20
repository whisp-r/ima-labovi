import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown";

// Categories (first dropdown)
const categories = ["Hygiene", "Electronics", "Food", "Household"];

// Products for each category (second dropdown shows these)
const productsByCategory = {
  Hygiene: [
    "Shampoo",
    "Soap",
    "Toothpaste",
    "Deodorant",
    "Conditioner",
    "Body Wash",
  ],
  Electronics: [
    "Cables",
    "Chargers",
    "Headphones",
    "Power Banks",
    "USB Drives",
    "Adapters",
  ],
  Food: [
    "Snacks",
    "Beverages",
    "Frozen Food",
    "Fresh Produce",
    "Canned Goods",
    "Bakery",
  ],
  Household: [
    "Cleaning Supplies",
    "Kitchen Tools",
    "Storage Boxes",
    "Light Bulbs",
    "Batteries",
    "Laundry Detergent",
  ],
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hygiene");
  const [selectedProduct, setSelectedProduct] = useState("Shampoo");

  // Get products for selected category
  const products = productsByCategory[selectedCategory];
  
  // useEffect() hook (function_to_do_if_notice_update, variable to watch )
  useEffect(() => {
    setSelectedProduct(products[0]);
  }, [selectedCategory]);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1>Shopping Mart</h1>

      <div style={{ marginBottom: "20px" }}>
        <h3>Select Category:</h3>
        <Dropdown
          options={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Select Product:</h3>
        <Dropdown
          options={products}
          value={selectedProduct}
          onChange={setSelectedProduct}
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <h2>Selected:</h2>
        <p>
          <strong>Category:</strong> {selectedCategory}
        </p>
        <p>
          <strong>Product:</strong> {selectedProduct}
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
