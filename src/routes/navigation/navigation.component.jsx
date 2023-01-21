import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="header">
        <a href="#" class="logo">
          <i class="fas fa-utensils"></i>resto.{" "}
        </a>

        <nav class="navbar">
          <Link to="/">Home</Link>
          <Link to="/dishes">Dishes</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/menu">Menu</Link>
        </nav>

        <div class="icons">
          <i class="fas fa-bars" id="menu-bars"></i>
          <i class="fas fa-search" id="search-icon"></i>
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-shopping-cart"></a>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
