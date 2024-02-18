import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProductCard from './ProductCard';
import Data from '../products.json';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

const showResults = 'Showing 01 - 12 of 139 Results';

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
  console.log(products);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;

  const indexOfLastProduct = currentPage * productPerPage;
  const indexofFirstpage = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(indexofFirstpage, indexOfLastProduct);

  // function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? 'gridActive' : 'listActive'
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* product cards */}
                <div>
                  <ProductCard gridList={gridList} products={currentProducts} />
                </div>

                <Pagination
                  productPerPage={productPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
