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
        {menuItems.map((Val, id) => {
          return (
            <button className={`m-2`} key={id}>
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
