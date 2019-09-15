import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Icons from "./Components/Icons";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <article className="w-100 min-vh-100 flex flex-column items-center justify-between sans-serif bg-white black">
          <Icons />
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </article>
      </Router>
    );
  }
}

export default App;
