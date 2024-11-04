import React from "react";
import { Button, Coin, SimpleLink } from "../components";
import avatar_hover from "../images/avatar-hover.jpg";
import avatar from "../images/avatar.jpg";

const NAME = "Julio Moreira";

const TITLE = (
  <>
    <span className="strike">Designer</span> & Developer
  </>
);

const HOMETOWN = "Porto Alegre, Brazil";

const LOCATION = "Remotely";

export const Home = () => (
  <section className="w-100 ph3">
    <div className="mw8 center tc">
      <p className="lh-copy center measure">
        Hi, I'm <span className="b">{NAME}</span>, a {TITLE} from {HOMETOWN} currently
        working{" "}
        <SimpleLink
          external
          to={`//maps.app.goo.gl/UZoT8ww75cnZsvZx5`}
        >
          {LOCATION}
        </SimpleLink>{" "}
        who loves making things for the web.
      </p>
      <p>
        <Button to="/about">Read more about him &rarr;</Button>
      </p>
    </div>
  </section>
);

export default Home;
