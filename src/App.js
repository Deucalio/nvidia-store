import Homepage from "./components/Homepage";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = ({ PRODUCTS }) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (item) => {
    const itemContainer = item.target.parentElement.childNodes;

    
    const button = item.target; //add to cart button
    button.textContent = "Added to Cart";
    button.classList.add("bg-[#3b5d00]");
    button.classList.add("hover:bg-[#3b5d00]");
    button.classList.add("text-gray-300");
    button.classList.add("font-bold");
    button.classList.add("pointer-events-none");

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.classList.remove("bg-[#3b5d00]");
      button.classList.remove("hover:bg-[#3b5d00]");
      button.classList.remove("text-gray-300");
      button.classList.remove("font-bold");
      button.classList.remove("pointer-events-none");
    }, 2500);

    const name = itemContainer[0].textContent;
    const price = [...itemContainer].slice(-2)[0].textContent;

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

    const filteredItems = cartItems.filter((item) => item.name !== name);
    setCartItems(filteredItems);
  };

  const increaseQuantity = (item) => {
    const name =
      item.target.parentNode.parentNode.parentElement.children[1].children[0]
        .textContent;

    setCartItems(
      cartItems.map((product, index) => {
        if (product.name === name) {
          return { name, price: product.price, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      })
    );
  };
  const decreaseQuantity = (item) => {
    const name =
      item.target.parentNode.parentNode.parentElement.children[1].children[0]
        .textContent;

    let nextProducts = cartItems.map((product, index) => {
      if (product.name === name) {
        return {
          name,
          price: product.price,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.quantity > 0);

    setCartItems(nextProducts);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
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
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
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
