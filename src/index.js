import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

//const el = document.getElementById("app");
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container)
root.render(<App />);
//ReactDOM.render(<App />, el);