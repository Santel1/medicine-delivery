import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import CartPage from "./pages/CartPage";
import { Loader } from "./components/Loader";

const ShopPage = lazy(() => import("./pages/ShopPage"));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/*<Route path="/favorite" element={<Favorites />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
