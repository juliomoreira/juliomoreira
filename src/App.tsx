import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer, Header, Icons } from "./components";
import { About, Blog, Contact, Home, Works } from "./pages";

const App = () => (
  <article className="w-100 min-vh-100 flex flex-column items-center justify-between sans-serif bg-white black">
    <Icons />
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/works" component={Works} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
  </article>
);

export default App;
