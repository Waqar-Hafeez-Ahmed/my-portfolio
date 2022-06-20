import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMenu from "./NavMenu";
import Home from "./Components/home";
import About from "./Components/about";
import Coaching from "./Components/coaching";
import FreeGuides from "./Components/freeguides";
import Newsletter from "./Components/newsletter";
import Products from "./Components/products";
import Contacts from "./Components/contacts";
import LogIn from "./Components/login";

function App() {
  return (
    <Router>
      <NavMenu />
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
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
