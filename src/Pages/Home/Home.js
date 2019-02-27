import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../images/avatar.jpg";
import profile from "../../profile.json";

const Home = () => {
  return (
    <section id="home" className="page page--home d-flex justify-content-center align-items-center text-center" title="Home">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 col-md-4 offset-md-4 col-lg-2 offset-lg-5">
            <p>
              <img className="img-fluid rounded-circle" src={avatar} alt="" />
            </p>
          </div>
        </div>
        <p className="lead text-primary">
          <strong>{profile.name}</strong> is a {profile.title} from {profile.hometown}
          <br />
          currently living and working in{" "}
          <a
            href={`//www.google.com/maps?q=${profile.location}`}
            target="_blank"
            rel="noopener noreferrer"
            title="That beautiful landscape in the background."
            className="info"
          >
            <b>{profile.location}</b>
          </a>
          <br />
          who loves making things for the web.
        </p>
        <p>
          <Link to="/about" className="btn btn-primary rounded-pill" title="Take a look at my bio.">
            Read more about him
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Home;
