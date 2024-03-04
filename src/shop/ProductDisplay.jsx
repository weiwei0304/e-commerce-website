import React, { useState } from 'react';

const ProductDisplay = ({ item }) => {
  //   console.log(item);
  const { name, id, price, seller, ratingCount, quantity } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState('');
  const [size, setSize] = useState('Select Size');
  const [color, setColor] = useState('Select color');

  return <div>ProductDisplay:{name}</div>;
};

export default ProductDisplay;
