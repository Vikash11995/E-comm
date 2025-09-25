import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: "p1", name: "Laptop", price: 899, desc: "Powerful laptop for work and play.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsNo2hygc2YHMHwju5cfLszjvRGehIPHi2cfi1QgsUSRBUpQs8IVrOPbdelEeJ4M_K00I4c6i7Tm7OhQyRUeieQkXT8FkzOdl_PCgXLwB1" },
  { id: "p2", name: "Gaming Mouse", price: 49, desc: "High precision RGB gaming mouse.", imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJSU7fUqKErMjArnczkjg2I0gkeBqv423pIMNSeolnrDk-oxHLf2rd02948ikOF12zCWr6AETFHaYVgau53hpPNm9HkkOs1QN3WntWOnkzc5fhA1e0rDTo" },
  { id: "p3", name: "Keyboard", price: 79, desc: "Mechanical keyboard with backlight.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi78qtSOjaXJh2WJtdcWjyNmNHvEFAueuwcH0V8DAOVG07rErXOeWTiHWrNE2G571pUVZhWrhs143Qh6vBwDeMGwGpF7ACWALr6y8aXle8b4A4VG0ypxlayP0" },
  { id: "p4", name: "Laptop", price: 899, desc: "Powerful laptop for work and play.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsNo2hygc2YHMHwju5cfLszjvRGehIPHi2cfi1QgsUSRBUpQs8IVrOPbdelEeJ4M_K00I4c6i7Tm7OhQyRUeieQkXT8FkzOdl_PCgXLwB1" },
  { id: "p5", name: "Gaming Mouse", price: 49, desc: "High precision RGB gaming mouse.", imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJSU7fUqKErMjArnczkjg2I0gkeBqv423pIMNSeolnrDk-oxHLf2rd02948ikOF12zCWr6AETFHaYVgau53hpPNm9HkkOs1QN3WntWOnkzc5fhA1e0rDTo" },
  { id: "p6", name: "Keyboard", price: 79, desc: "Mechanical keyboard with backlight.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi78qtSOjaXJh2WJtdcWjyNmNHvEFAueuwcH0V8DAOVG07rErXOeWTiHWrNE2G571pUVZhWrhs143Qh6vBwDeMGwGpF7ACWALr6y8aXle8b4A4VG0ypxlayP0" },
  { id: "p7", name: "Laptop", price: 899, desc: "Powerful laptop for work and play.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsNo2hygc2YHMHwju5cfLszjvRGehIPHi2cfi1QgsUSRBUpQs8IVrOPbdelEeJ4M_K00I4c6i7Tm7OhQyRUeieQkXT8FkzOdl_PCgXLwB1" },
  { id: "p8", name: "Gaming Mouse", price: 49, desc: "High precision RGB gaming mouse.", imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJSU7fUqKErMjArnczkjg2I0gkeBqv423pIMNSeolnrDk-oxHLf2rd02948ikOF12zCWr6AETFHaYVgau53hpPNm9HkkOs1QN3WntWOnkzc5fhA1e0rDTo" },
  { id: "p9", name: "Keyboard", price: 79, desc: "Mechanical keyboard with backlight.", imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi78qtSOjaXJh2WJtdcWjyNmNHvEFAueuwcH0V8DAOVG07rErXOeWTiHWrNE2G571pUVZhWrhs143Qh6vBwDeMGwGpF7ACWALr6y8aXle8b4A4VG0ypxlayP0" },
];

export default function Shop() {
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-2xl font-semibold mb-4">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-2 px-10">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
