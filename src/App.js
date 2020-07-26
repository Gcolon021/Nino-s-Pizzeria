import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Location from "./components/location";
import Menu from "./components/menu";
import Contact from "./components/contact";
import Navbar from "./components/nav";

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/location" component={Location} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

// <Link to="/{path}"> path </Link> can be used to handle redirect as button links