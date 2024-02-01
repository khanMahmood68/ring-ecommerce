import React from 'react';
import { useShoppingCart } from '../Context/ShopingCartContext';
import styles from '../Styles/cart.module.css'

const Cart = () => {
  const { cartItems } = useShoppingCart();
  console.log('Inside Cart', cartItems);

  return (
    <div className={styles.cartContainer}>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <li key={item.id.id} className={styles.cartItem}>
              <img src={item.id.image} alt='product image' className={styles.productImage} />
              <div className={styles.productInfo}>
                <h2>{item.id.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price per item: ${item.id.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


