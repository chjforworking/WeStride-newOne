import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchImg from "./Api";

searchImg("dog").then((result) => {
  console.log(result);
});

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
