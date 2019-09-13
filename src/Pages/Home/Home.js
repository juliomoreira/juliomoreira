import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../images/avatar.jpg";
import avatar_hover from "../../images/avatar-hover.jpg";
import profile from "../../profile.json";
import Coin from "../../Components/Coin";

const Home = () => {
  return (
    <section className="w-100 ph3">
      <div className="mw8 center tc">
        <Coin heads={<img className="mw-100 br-100" src={avatar} alt="" />} tails={<img className="mw-100 br-100" src={avatar_hover} alt="" />} />
        <p className="lh-copy center measure">
          <span className="b">{profile.name}</span> is a {profile.title} from {profile.hometown} currently living and working in{" "}
          <a
            href={`//www.google.com/maps?q=${profile.location}`}
            target="_blank"
            rel="noopener noreferrer"
            className="b no-underline black bl-0 bt-0 br-0 bb b--dotted dim georgia i"
          >
            {profile.location}
          </a>{" "}
          who loves making things for the web.
        </p>
        <p>
          <Link to="/about" className="dib no-underline pv3 ph4 bg-black white br-pill">
            Read more about him &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Home;
