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

  {
    imgLink:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08186082.png?imwidth=270&imdensity=1",
    name: "HP Victus GeForce RTX 3050 Ti, 15.6 , Intel Core i5-12500H, 8GB RAM, 512GB SSD",
    description: {
      para1: "GPU: GeForce RTX 3050 Ti",
      para2: `Display: 15.6" | 1920 x 1080`,
      para3: "CPU: Intel Core i5-12500H",
      para4: "Memory: 8 GB DDR4",
      para5: "Storage: 512 GB SSD",
    },
    price: "$749.00",
    button: "Add to Cart",
  },

  {
    imgLink: "https://assets.nvidia.partners/images/png/G513QM-WS96.png",
    name: "ASUS ROG G513QM-WS96",
    description: {
      para1: "GPU: GeForce RTX 3060",
      para2: `Display: 15.6" | 1920 x 1080`,
      para3: "CPU: Ryzen 9 5900HX",
      para4: "Memory: 16GB DDR",
      para5: "Storage: 1 TB SSD",
    },
    price: "$1,099.99",
    button: "Add to Cart",
  },

  {
    imgLink: "https://assets.nvidia.partners/images/png/razer-blade-14.png",
    name: "Razer Blade 14 - GeForce RTX 3070 Laptop GPU, 14,Ryzen 9, 16GB, 1TB SSD",
    description: {
      para1: "GPU: GeForce RTX 3070",
      para2: `Display: 14" | 2560 x 1440`,
      para3: "CPU: Ryzen 9 5900HX",
      para4: "Memory: 16GB DDR4-SDRAM",
      para5: "Storage: 1 TB SSD",
    },
    price: "$1,799.99",
    button: "Add to Cart",
  },

  {
    imgLink: "https://assets.nvidia.partners/images/png/ROG_Keris_05.png",
    name: "ASUS ROG Keris (wired only)",
    description: {
      para1: "Support Wireless: N/A",
      para2: `FW Version: 1.00.08`,
      para3: "Support Wired: Yes",
      para4: "",
      para5: "",
    },
    price: "$34.99",
    button: "Add to Cart",
  },

  {
    imgLink: "https://assets.nvidia.partners/images/png/ROG_Gladius_III_07.png",
    name: "ASUS ROG Gladius III Wired",
    description: {
      para1: "Support Wireless: N/A",
      para2: `FW Version: 1.00.16`,
      para3: "Support Wired: Yes",
      para4: "",
      para5: "",
    },
    price: "$49.99",
    button: "Add to Cart",
  },

  {
    imgLink:
      "https://assets.nvidia.partners/images/png/Predator-Cestus_330_sku.png",
    name: "Acer Predator Cestus 330",
    description: {
      para1: "Support Wired: Yes",
      para2: `Support Wireless: No`,
      para3: "FW Version: 1.0",
      para4: "",
      para5: "",
    },
    price: "$24.99",
    button: "Add to Cart",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App PRODUCTS={PRODUCTS} />
  </React.StrictMode>
);
