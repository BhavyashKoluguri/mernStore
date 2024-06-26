import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/ProductContext";
import { CartProvider } from "./context/cartContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
      <App />
      </CartProvider>
    
    </AppProvider>
  </React.StrictMode>
);
