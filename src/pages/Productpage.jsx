import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: "p1", name: "Laptop", price: 899, desc: "Powerful laptop for work and play.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsNo2hygc2YHMHwju5cfLszjvRGehIPHi2cfi1QgsUSRBUpQs8IVrOPbdelEeJ4M_K00I4c6i7Tm7OhQyRUeieQkXT8FkzOdl_PCgXLwB1" },
  { id: "p2", name: "Gaming Mouse", price: 49, desc: "High precision RGB gaming mouse.", imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJSU7fUqKErMjArnczkjg2I0gkeBqv423pIMNSeolnrDk-oxHLf2rd02948ikOF12zCWr6AETFHaYVgau53hpPNm9HkkOs1QN3WntWOnkzc5fhA1e0rDTo" },
  { id: "p3", name: "Keyboard", price: 79, desc: "Mechanical keyboard with backlight.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi78qtSOjaXJh2WJtdcWjyNmNHvEFAueuwcH0V8DAOVG07rErXOeWTiHWrNE2G571pUVZhWrhs143Qh6vBwDeMGwGpF7ACWALr6y8aXle8b4A4VG0ypxlayP0" },
];

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <>
    <div className="flex gap-10 h-[60vh] items-center bg-gray-300 px-5 rounded-4xl">
    <div className="h-70 w-80 bg-white flex items-center justify-center rounded-md mb-4 p-5 transition-all duration-300 hover:p-4">
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
   
<div>
<h2 className="text-2xl font-bold mb-2 text-zinc-900 ">{product.name}</h2>
      <p className="text-gray-600 dark:text-black mb-4">{product.desc}</p>
      <p className="text-xl text-amber-900 font-semibold mb-4">${product.price}</p>
      <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
</div>
</div>
    </>
  );
}
