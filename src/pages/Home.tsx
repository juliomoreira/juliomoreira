import React from "react";
import { Button, Coin, SimpleLink } from "../components";
import avatar_hover from "../images/avatar-hover.jpg";
import avatar from "../images/avatar.jpg";

const NAME = "Julio Moreira";
const TITLE = "Designer & Developer";
const HOMETOWN = "Porto Alegre, Brazil";
const LOCATION = "Remotely";

export const Home = () => (
  <section className="w-100 ph3">
    <div className="mw8 center tc">
      <Coin
        heads={<img className="mw-100 br-100" src={avatar} alt="" />}
        tails={<img className="mw-100 br-100" src={avatar_hover} alt="" />}
      />
      <p className="lh-copy center measure">
        <span className="b">{NAME}</span> is a {TITLE} from {HOMETOWN} currently
        working{" "}
        <SimpleLink
          external
          to={`//google.com/maps/@-49.7609974,5.4545981,15529918m/data=!3m1!1e3`}
        >
          {LOCATION}
        </SimpleLink>{" "}
        who loves making things for the web 🌐.
      </p>
      <p>
        <Button to="/about">Read more about him &rarr;</Button>
      </p>
    </div>
  </section>
);

export default Home;
