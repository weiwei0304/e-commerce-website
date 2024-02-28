import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SIngleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(id);

  return <div>SIngleProduct</div>;
};

export default SIngleProduct;
