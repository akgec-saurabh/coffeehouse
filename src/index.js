import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Modal from "./UI/Modal";
import AddOn from "./components/AddOn";
import Bill from "./pages/Bill";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // {/* <AddOn /> */}
  // </React.StrictMode>
);
