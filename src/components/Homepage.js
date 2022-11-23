import React from "react";
import Main from "./Main";
import Nav from "./Nav";

const Homepage = ({increaseQuantity,decreaseQuantity,removeCartItem,cartItems}) => {
  return (
    <>
      <Nav increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeCartItem={removeCartItem} cartItems={cartItems} />
      <Main />
    </>
  );
};

export default Homepage;
