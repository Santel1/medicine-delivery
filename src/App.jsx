import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Loader } from "./components/Loader";
import HistoryPage from "./pages/HistoryPage";

const ShopPage = lazy(() => import("./pages/ShopPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
