import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../NavTabs/home";
import About from "../NavTabs/about";
import Coaching from "../NavTabs/coaching";
import FreeGuides from "../NavTabs/freeguides";
import Newsletter from "../NavTabs/newsletter";
import Products from "../NavTabs/products";
import Contacts from "../NavTabs/contacts";
import LogIn from "../NavTabs/login";
import NavMenu from "./NavMenu";

import React from "react";

function NavBar() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/coaching">
          <Coaching />
        </Route>
        <Route path="/freeguides">
          <FreeGuides />
        </Route>
        <Route path="/newsletter">
          <Newsletter />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
