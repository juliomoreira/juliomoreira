import React from "react";
import { Link } from "react-router-dom";

// import avatar from "../../images/avatar.jpg";
import avatar_hover from "../../images/avatar-hover.jpg";
import profile from "../../profile.json";

const Home = () => {
  return (
    <section id="home" className="tc" title="Home">
      <p>
        <img className="w5 mw-100 br-100" src={avatar_hover} alt="" />
      </p>
      <p className="lh-copy">
        <strong>{profile.name}</strong> is a {profile.title} from {profile.hometown}
        <br />
        currently living and working in{" "}
        <a
          href={`//www.google.com/maps?q=${profile.location}`}
          target="_blank"
          rel="noopener noreferrer"
          className="b no-underline black bl-0 bt-0 br-0 bb b--dotted dim"
        >
          {profile.location}
        </a>
        <br />
        who loves making things for the web.
      </p>
      <p>
        <Link to="/about" className="dib no-underline pv3 ph4 bg-black white br-pill" title="Take a look at my bio.">
          Read more about him
        </Link>
      </p>
    </section>
  );
};

export default Home;
