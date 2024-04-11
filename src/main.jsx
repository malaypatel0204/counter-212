import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Counter } from "./Counter.jsx";
import { DateToday } from "./Date.jsx";
import { DisplayDataWithAPI } from "./DisplayDataWithAPI.jsx";
import { Login } from "./Login.jsx";
import { DisplayDataWithAxios } from "./DisplayDataWithAxios.jsx";
import { LoginWithFormik } from "./LoginWithFormik.jsx";
import { FormikWithYup } from "./FormikWithYup.jsx";
import Product from "./Product.jsx";
import Parent from "./Parent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Parent  />
  </React.StrictMode>
);
