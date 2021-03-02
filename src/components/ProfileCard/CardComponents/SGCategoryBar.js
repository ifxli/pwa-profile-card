import React from 'react';
import './SGCategoryBar.css';

const SGCategoryBar = ({ category }) => {
  return (
    <div className="category-bar">
      <div className="sg-left">{category.SG_Category_Detail}</div>
      
      <div className="sg-right">{category["avg-SG-per-round"]}</div>
    </div>
  )
}

export default SGCategoryBar;
