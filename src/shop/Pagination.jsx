/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = ({
  productPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumber.length) {
              paginate(activePage - 1);
            }
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pageNumber.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? 'bg-warning' : ''}`}
        >
          <button onClick={() => paginate(number)} className="bg-transparent">
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
