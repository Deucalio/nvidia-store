import Homepage from "./components/Homepage";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = ({ PRODUCTS }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addCartItem = (item) => {
    const itemContainer = item.target.parentElement.childNodes;

    const name = itemContainer[0].textContent;

    // special case for featured item
    if (name.includes("Ti")) {
      const price = itemContainer[5].textContent;
      setCartItems([...cartItems, ...[{ name, price }]]);
    } else {
      const price = itemContainer[4].textContent;
      setCartItems([...cartItems, ...[{ name, price }]]);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage cartItems={cartItems} addCartItem={addCartItem} />
            }
          ></Route>
          <Route
            path="/buy"
            element={
              <Products
                cartItems={cartItems}
                addCartItem={addCartItem}
                PRODUCTS={PRODUCTS}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
