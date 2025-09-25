import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, saveOrderFromCart } = useCart();
  const total = cart.reduce((sum, i) => sum + (i.price || 0) * (i.qty || 1), 0);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {(!cart || cart.length === 0) ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id || item.name} className="flex justify-between items-center mb-3 border-b pb-2">
              <div>
                <h3>{item.name}</h3>
                <p>${item.price} × {item.qty}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= 1) {
                      updateQty(item.id, value);
                    }
                  }}
                  className="w-16 border rounded p-1"
                />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h3>
          <button
            onClick={() => {
              if (typeof saveOrderFromCart === "function") {
                saveOrderFromCart();
              }
            }}
            className="bg-green-500 text-white px-4 py-2 mt-3 rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
