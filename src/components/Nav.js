import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AddProductInCart = ({ increaseQuantity,decreaseQuantity, removeCartItem, quantity, name, price }) => {

  
  
  return (
    <div className="grid h-fit grid-cols-4 gap-y-6 border-b-2 border-[#666]/25 sm:px-6">
      <div className="mt-3 flex flex-wrap gap-2">
        <svg onClick={decreaseQuantity}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 -rotate-90 cursor-pointer opacity-75"
          viewBox="0 0 24 24"
        >
          <path d="M24 22h-24l12-20z" />
        </svg>
        <p className="-mt-1 text-xl">{quantity}</p>
        <svg onClick={increaseQuantity}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 rotate-90 cursor-pointer opacity-75"
          viewBox="0 0 24 24"
        >
          <path d="M24 22h-24l12-20z" />
        </svg>
      </div>

      <div className="col-span-3">
        <p className="relative text-xl  tracking-tighter text-black opacity-90">
          {name}
        </p>
        <p
          onClick={removeCartItem}
          className="cursor-pointer text-lg text-[#76b900]"
        >
          Remove
        </p>
      </div>

      <p className="col-start-4 -ml-8 text-2xl text-black">
        {price.split(".")[0]} <sup>{price.split(".")[1]}</sup>
      </p>
    </div>
  );
};

const Nav = ({
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
  cartItems,
}) => {
  const [overlayActive, setOverlayActive] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const formatPrice = (stringN) => {
    return stringN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calculatePrice = (price, quantity) => {
    const num = (
      Number(price.substr(1).split(",").join("")) * Number(quantity)
    ).toFixed(2);
    return "$" + formatPrice(num);
  };

  const totalAmount = () => {
    return formatPrice(
      String(
        cartItems
          .reduce(
            (accr, item) =>
              accr +
              Number(
                calculatePrice(item.price, item.quantity)
                  .substr(1)
                  .split(",")
                  .join("")
              ),
            0
          )
          .toFixed(2)
      )
    );
  };

  useEffect(() => {
    cartItems.length !== 0 ? setCartProducts(cartItems) : setCartProducts([]);
  
  }, [cartItems]);

  if (overlayActive) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };

  return (
    <>
      <nav className="h-14 bg-black px-7 py-2 md:px-24">
        <ul className="flex items-center gap-10">
          <NavLink to="/">
            <li>
              <p className="cursor-pointer text-2xl font-bold text-white">
                GeForce
              </p>
            </li>
          </NavLink>
          <NavLink to="/buy">
            <li>
              <p className="mt-1 cursor-pointer text-xl text-gray-300 hover:text-gray-100">
                Products
              </p>
            </li>
          </NavLink>
          <li onClick={toggleOverlay} className="mt-2 flex flex-wrap relative">
            <button
              id="cart"
              datanum={String(
                cartProducts.reduce(
                  (acc, currentVal) => acc + currentVal.quantity,
                  0
                )
              )}
              className={`h-w-7 w-7 bg-transparent text-slate-200 before:absolute before:-top-4 before:z-10 before:-ml-1 before:text-lg before:text-gray-50 after:absolute after:-top-3 after:left-2 after:h-5 after:w-6 after:rounded-full after:bg-[#76b900] after:text-transparent after:content-['box']`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      {/* overlay */}
      <div
        className={`${
          overlayActive ? "" : "hidden"
        } top-6 z-10 h-screen w-full overflow-y-auto md:overflow-visible   bg-gray-200 px-2 shadow-lg shadow-gray-900 md:absolute md:top-20 md:-m-8 md:h-fit md:w-[30rem] md:py-3 md:translate-x-20 md:translate-y-1 md:rounded-sm md:bg-gray-200 md:px-1   md:after:absolute md:after:left-1/2 md:after:-top-16 md:after:h-0 md:after:w-0 md:after:translate-x-7 md:after:translate-y-7 md:after:border-[25px] md:after:border-transparent md:after:border-b-gray-200 md:after:content-['']`}
      >
        <div className="flex flex-wrap justify-between px-8 py-4">
          <p className="text-3xl text-[#76b900]">Cart</p>
          <p
            onClick={toggleOverlay}
            className="cursor-pointer -translate-y-1 text-5xl text-black/50"
          >
            &times;
          </p>
        </div>

        <div className="flex h-96 flex-col gap-5 border-amber-600 caret-slate-700 sm:overflow-y-auto">
          {cartProducts.length !== 0
            ? cartProducts.map((item) => (
                <AddProductInCart
                  decreaseQuantity={decreaseQuantity}
                  increaseQuantity={increaseQuantity}
                  removeCartItem={removeCartItem}
                  name={item.name}
                  price={calculatePrice(item.price, item.quantity)}
                  quantity={item.quantity}
                />
              ))
            : ""}

          <div
            className={`py-6 pb-16  flex flex-col items-center ${
              cartProducts.length !== 0 ? "" : "hidden"
            }`}
          >
            <p className="text-right text-3xl self-end md:px-16 sm:px-32">
              ${String(totalAmount().split(".")[0])}.
              <sup>{String(totalAmount().split(".")[1])}</sup>
            </p>
            <button className="rounded-sm bg-[#76b900] w-9/12 mt-2 mx-auto flex flex-wrap justify-center py-2 items-center gap-3">
              <svg
                xmlns="http//www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <p className="md:text-2xl text-xl text-white text-center font-bold mt-1">
                Checkout
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* overlay to close the cart menu if user clicks outside of popup*/}
      {overlayActive && (
        <div
          onClick={toggleOverlay}
          className="absolute top-0 bottom-0 left-0 right-0 -z-10 md:z-0"
        ></div>
      )}
    </>
  );
};

export default Nav;
