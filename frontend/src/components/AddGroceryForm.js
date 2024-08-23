// src/components/AddGroceryForm.js
import React, { useState } from "react";
import "./add.css"; 

function AddGroceryForm({ onAdd, categories }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGrocery = { name, quantity, category };
    onAdd(newGrocery);
    setName("");
    setQuantity("");
    setCategory("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Grocery Name"
          required
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="select"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddGroceryForm;
