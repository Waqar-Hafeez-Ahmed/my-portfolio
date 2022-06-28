import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavMenu.module.css";

function NavMenu() {
  return (
    <div className={classes.NavBar}>
      <ul>
        <div className={classes.logo}>
          <li>
            <NavLink to="/">Waqar Ahmed</NavLink>
          </li>
        </div>
        <div className={classes.nav}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/coaching">Coaching</NavLink>
          </li>
          <li>
            <NavLink to="/freeguides">Free Guides</NavLink>
          </li>
          <li>
            <NavLink to="/newsletter">Newsletter</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavMenu;
