import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
