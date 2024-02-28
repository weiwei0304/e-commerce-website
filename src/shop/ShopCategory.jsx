import React from 'react';
import Data from '../products.json';

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`}
          onClick={() => setItem(Data)}
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              key={id}
              className={`m-2 ${selectedCategory === Val ? 'bg-warning' : ''}`}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
