import React, { createContext, useState } from 'react';

// Membuat context
export const CartContext = createContext();

// Membuat provider untuk context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fungsi untuk menambah produk ke keranjang
  const addToCart = (product, quantity, variant) => {
    const existingItem = cartItems.find(item => item.id === product.id && item.variant === variant);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && item.variant === variant
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity, variant }]);
    }
  };

  // Fungsi untuk menghapus produk dari keranjang
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
