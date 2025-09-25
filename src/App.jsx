import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/Productpage"; // fixed import name
import CartPage from "./pages/CartPage";
import HistoryPage from "./pages/HistoryPage";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-zinc-200 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Navbar />
          <div className="max-w-full mx-auto py-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/history" element={<HistoryPage />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
