import React from "react";
import Main from "./Main";
import Nav from "./Nav";

const Homepage = ({removeCartItem,cartItems}) => {
  return (
    <>
      <Nav removeCartItem={removeCartItem} cartItems={cartItems} />
      <Main />
    </>
  );
};

export default Homepage;
