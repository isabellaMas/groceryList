import React from 'react';
import './filter.css'; 

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="category-filter-container">
            <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;
