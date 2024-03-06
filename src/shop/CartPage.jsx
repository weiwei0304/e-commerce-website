import React, { useState, useEffect } from 'react';

import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

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

  // handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // update local storage with items
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  // handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // update local storage with items
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  };

  const updateLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  // handle remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    // update new cart
    setCartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  // cart total
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={'Shop Cart'} curPage={'Cart Page'}></PageHeader>
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {cartItems.map((item, i) => {
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link>
                            <img src="" alt="" />
                          </Link>
                        </div>
                      </td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
            {/* cart top end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
