import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Icons from "./Components/Icons/Icons";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Works from "./Pages/Works/Works";
import Contact from "./Pages/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Icons />
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
