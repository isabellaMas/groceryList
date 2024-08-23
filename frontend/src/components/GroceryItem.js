// src/components/GroceryItem.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import EmojiConvertor from "emoji-js";
import "./item.css"; 

function GroceryItem({ item }) {
  const [checked, setChecked] = useState(item.checked); 

  useEffect(() => {
    setChecked(item.checked); 
  }, [item.checked]);

  const emoji = new EmojiConvertor();
  emoji.replace_mode = "unified"; 
  emoji.allow_native = true;

  const categoryEmojiMapping = {
    1: "🍎", // Fruits
    2: "🥦", // Vegetables
    3: "🥛", // Dairy
    4: "🥩", // Meat
    5: "🥤", // Beverages
    6: "🍪", // Snacks
    7: "🥐", // Bakery
    8: "🧊", // Frozen
    9: "🧹", // Household Items
  };

  function getEmojiForItem(itemName, category) {
    const itemEmoji = emoji.replace_colons(`:${itemName}:`);
    if (itemEmoji.includes(itemName)) {
      return categoryEmojiMapping[category] || "";
    }
    return itemEmoji;
  }

  const deleteItem = async (event) => {
    event.stopPropagation(); 

    try {
      await axios.delete(
        `http://localhost:8000/api/groceries/delete/${item.id}/`
      );
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete item", error);
    }
  };

  const toggleChecked = async () => {
    try {
      await axios.put(
        `http://localhost:8000/api/groceries/update/${item.id}/`,
        { checked: !checked }
      );
      setChecked(!checked); 
    } catch (error) {
      console.error("Failed to update item", error);
    }
  };

  return (
    <div className="grocery-item" onClick={toggleChecked}>
      <div className="item-details">
        <h4 className={checked ? "strikethrough" : ""}>
          {item.name} {getEmojiForItem(item.name, item.category)}
        </h4>
        <p className={checked ? "strikethrough" : ""}>
          Quantity: {item.quantity}
        </p>
      </div>
      <button className="delete-button" onClick={deleteItem}>
        ✘
      </button>
    </div>
  );
}

export default GroceryItem;
