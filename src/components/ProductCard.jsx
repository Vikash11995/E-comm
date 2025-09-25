import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Debug: Log the product to check if imgUrl is present and valid
  // console.log("ProductCard product:", product);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800 ">
      <div className="h-40 bg-white flex items-center justify-center rounded-md mb-4 p-2 transition-all duration-300 hover:p-1">
        {/* 
          If the image is not loading:
          - Check if product.imgUrl is a valid, accessible URL.
          - Make sure the URL is not blocked by CORS or is not expired.
          - Try opening the URL in a new browser tab to verify.
          - If using a local image, ensure the path is correct and the image is in the public directory.
        */}
        {product.imgUrl && typeof product.imgUrl === "string" && product.imgUrl.trim() !== "" ? (
          // Add onError handler to show fallback if image fails to load
          <img
            src={product.imgUrl}
            alt={product.name}
            className="max-h-full object-contain"
            onError={e => {
              e.target.onerror = null;
              e.target.style.display = "none";
              // Optionally, you could set a state to show a fallback here
            }}
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        )}
        {/* If image fails to load, "No Image" will not show unless you add state logic */}
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
      <div className="flex justify-between mt-3">
        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">Details</Link>
        <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Add</button>
      </div>
    </div>
  );
}

export default ProductCard;
