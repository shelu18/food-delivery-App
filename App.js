//creating a food delivery app
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};


//body
const Cart = () => {
  return <div className="cart">
    
    <img ClassName="food-img"
    src ="https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=" alt="food"/>
    <h3>Guru Kripa</h3>
    <p>Indian Biryani</p>
    <p>Price: 310 rs </p>
    <button>Add to Cart</button>


  </div>;
 
};

const Body = () => {
  return (
    <div className="body">
      <div ClassName="search"> Search</div>
      <div className="res-container">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
