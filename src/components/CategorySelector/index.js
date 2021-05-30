import React from 'react';
import './CategorySelector.css';

const CategorySelector = ({ onCategoryClick, selectedCategory }) => {
  const handleOnCategoryClick = (event) => {
    const {
      target: { name },
    } = event;
    if (onCategoryClick) onCategoryClick(name);
  };

  return (
    <div className="category_selector">
      <button
        className={selectedCategory === 'minor' ? 'selected_category' : 'category'}
        name="minor"
        onClick={handleOnCategoryClick}
      >
        Menor
      </button>
      <button
        className={selectedCategory === 'major' ? 'selected_category' : 'category'}
        name="major"
        onClick={handleOnCategoryClick}
      >
        Mayor
      </button>
    </div>
  );
};

export default CategorySelector;
