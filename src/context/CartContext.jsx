import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("orders", JSON.stringify(orders)), [orders]);

  // Calculate total quantity in cart

  const cartCount = cart.reduce((s, it) => s + (it.qty || 1), 0);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.price === product.price);
      return existing
        ? prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id, qty) => setCart((prev) =>
    prev.map((i) => (i.id === id ? { ...i, qty: Math.max(qty, 1) } : i))
  );
  const clearCart = () => setCart([]);
  const saveOrderFromCart = () => {
    setOrders((prev) => [
      ...prev,
      { id: Date.now(), date: new Date().toLocaleString(), items: cart },
    ]);
    clearCart();
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, updateQty, clearCart, orders, saveOrderFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
