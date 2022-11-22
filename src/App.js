import Homepage from "./components/Homepage";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = ({ PRODUCTS }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);



  const getPrice = (item) => {
    // special case for featured item
    if (item[0].textContent.includes("Ti")) {
      return item[5].textContent;
    } else {
      return item[4].textContent;
    }
  };

  const addCartItem = (item) => {
    const itemContainer = item.target.parentElement.childNodes;

    const name = itemContainer[0].textContent;
    const price = getPrice(itemContainer);

    // if item is already in cart, increase its quantity
    const duplicateNameIndex = cartItems.findIndex(
      (product) => product.name === name
    );
    if (duplicateNameIndex === -1) {
      //if it is not in cart
      setCartItems([...cartItems, ...[{ name, price, quantity: 1 }]]);
    } else {
      setCartItems([
        ...cartItems.map((product, i) => {
          if (i === duplicateNameIndex) {
            return {
              name,
              price,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        }),
      ]);
    }
  };

  const removeCartItem = (item) => {
    const name = String(item.target.parentElement.childNodes[0].textContent);
    console.log(name);

    const filteredItems = cartItems.filter((item) => item.name !== name);
    console.log("filter", filteredItems);
  };

  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                removeCartItem={removeCartItem}
                cartItems={cartItems}
                addCartItem={addCartItem}
              />
            }
          ></Route>
          <Route
            path="/buy"
            element={
              <Products
                removeCartItem={removeCartItem}
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
