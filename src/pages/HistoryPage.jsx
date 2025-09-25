import React from "react";
import { useCart } from "../context/CartContext";

export default function HistoryPage() {
  const { orders, clearHistory } = useCart();


  const handleClearHistory = () => {
    if (
      window.confirm(
        "Are you sure you want to clear your entire order history? This action cannot be undone."
      )
    ) {
      clearHistory();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
          <button
            onClick={handleClearHistory}
            className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear History
          </button>
          <div className="space-y-4" id="historyCard">
            {orders.map((order) => (
              <div key={order.id} className="border p-4 rounded">
                <h3 className="font-bold">Order #{order.id}</h3>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
                <ul className="list-disc ml-5 mt-2">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} × {item.qty} (${item.price})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
