import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // fetch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  //   calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  return <div>CartPage</div>;
};

export default CartPage;
