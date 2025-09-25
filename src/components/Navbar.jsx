import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStore, FaHistory, FaHome } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart,cartCount } = useCart();
//   console.log(cart.length);
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
     <Link to="/"> <h1 className="text-xl font-bold">ElectroShop</h1></Link>
      <div className="flex gap-6">
        <Link to="/" className="flex items-center gap-2 hover:text-gray-200"><FaHome /> Home</Link>
        <Link to="/shop" className="flex items-center gap-2 hover:text-gray-200"><FaStore /> Shop</Link>
        <Link to="/history" className="flex items-center gap-2 hover:text-gray-200"><FaHistory /> Orders</Link>
        <div className="relative flex items-center">
          <Link to="/cart" className="flex items-center gap-2 hover:text-gray-200">
            <FaShoppingCart /> Cart
          </Link>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {cartCount}
             
            </span>
          )}
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
