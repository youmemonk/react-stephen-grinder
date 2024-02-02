// 1. Import React and React DOM library
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2. Get a reference to the div with ID root
const el = document.getElementById("root");

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Show component on Screen
root.render(<App />);
