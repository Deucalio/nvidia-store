import React from "react";
import Main from "./Main";
import Nav from "./Nav";

const Homepage = ({cartItems}) => {
  return (
    <>
      <Nav cartItems={cartItems} />
      <Main />
    </>
  );
};

export default Homepage;
