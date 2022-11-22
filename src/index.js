import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const PRODUCTS = [
  {
    imgLink:
      "https://assets.nvidia.partners/images/png/GeForce-RTX4080-Back.png",
    name: "NVIDIA GeForce RTX 4080",
    description: {
      para1: "Cooling System: Fan",
      para2: "Boost Clock Speed: 2.51 GHz",
      para3: "GPU Memory Size: 16 GB",
      para4: "",
      para5: "",
    },
    price: "$1,199.99",
    button: "Add to Cart",
  },
  {
    imgLink:
      "https://assets.nvidia.partners/images/png/GeForce-RTX4090-Back.png",
    name: "NVIDIA GeForce RTX 4090",
    description: {
      para1: "Cooling System: Fan",
      para2: "Boost Clock Speed: 2.52 GHz",
      para3: "GPU Memory Size: 24 GB",
      para4: "",
      para5: "",
    },
    price: "$1,599.99",
    button: "Out of Stock",
  },
  {
    imgLink:
      "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080.png",
    name: "NVIDIA GeForce RTX 3080",
    description: {
      para1: "Cooling System: Fan",
      para2: "Boost Clock Speed: 1.71 GHz",
      para3: "GPU Memory Size: 10 GB",
      para4: "",
      para5: "",
    },
    price: "$699.99",
    button: "Out of Stock",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App PRODUCTS={PRODUCTS} />
  </React.StrictMode>
);
