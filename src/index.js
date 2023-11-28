import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./USER/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <AuthContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </AuthContext>
  </React.StrictMode>
);
