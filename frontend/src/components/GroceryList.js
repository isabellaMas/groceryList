// src/components/GroceryList.js
import React, { useState } from "react";
import GroceryItem from "./GroceryItem";
import CategoryFilter from "./CategoryFilter";
import axios from "axios";
import "./list.css";

function GroceryList({ groceries, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const deleteCheckedItems = async () => {
    const checkedItems = groceries.filter((item) => item.checked);
    const deletePromises = checkedItems.map(item =>
      axios.delete(`http://localhost:8000/api/groceries/delete/${item.id}/`)
    );
    try {
      await Promise.all(deletePromises);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete items", error);
    }
  };

  const filteredGroceries = selectedCategory
    ? groceries.filter(
        (grocery) => grocery.category === Number(selectedCategory)
      )
    : groceries;


  return (
    <div className="grocery-list">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <button className="deleteAll" onClick={deleteCheckedItems}>delete checked</button>
      </div>
      <div>
        {filteredGroceries.map((item) => (
          <GroceryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default GroceryList;
