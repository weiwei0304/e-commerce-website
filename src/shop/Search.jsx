import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>

      {/* showing search results */}
      <div>
        {searchTerm &&
          filterProducts.map((product) => (
            <Link key={product.id} to={`shop/${product.id}`}>
              <div className="d-flex gap-3 p-2">
                <div className="pro-thumb h-25">
                  <img
                    src={product.img}
                    alt=""
                    width={70}
                    className="flex-{grow|shrink}-0"
                  />
                </div>
              </div>
              <div className="product-content"></div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
