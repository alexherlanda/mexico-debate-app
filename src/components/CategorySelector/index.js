import React from 'react';

const CategorySelector = ({ onCategoryClick }) => {
  const handleOnCategoryClick = (event) => {
    const {
      target: { name },
    } = event;
    if (onCategoryClick) onCategoryClick(name);
  };

  return (
    <div>
      <button name="minor" onClick={handleOnCategoryClick}>
        Menor
      </button>
      <button name="major" onClick={handleOnCategoryClick}>
        Mayor
      </button>
    </div>
  );
};

export default CategorySelector;
