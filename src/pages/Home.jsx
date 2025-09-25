import React from "react";
import Caro from "../components/Caro";
export default function Home() {
  return (
    <div className="pb-10">
      <Caro/>
      <div className="text-center h-full ">
        <h2 className="text-3xl font-bold mb-4">Welcome to ElectroShop ⚡</h2>
        <p>Find the best electronics at unbeatable prices!</p>
      </div>
    </div>
  );
}
