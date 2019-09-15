import React from "react";

import Coin from "../../Components/Coin";
import SimpleLink from "../../Components/SimpleLink";
import Button from "../../Components/Button";

import avatar from "../../images/avatar.jpg";
import avatar_hover from "../../images/avatar-hover.jpg";

const profile = {
  name: "Julio Moreira",
  title: "Designer & Developer",
  hometown: "Porto Alegre, Brazil",
  location: "São Paulo"
};

const Home = () => {
  return (
    <section className="w-100 ph3">
      <div className="mw8 center tc">
        <Coin heads={<img className="mw-100 br-100" src={avatar} alt="" />} tails={<img className="mw-100 br-100" src={avatar_hover} alt="" />} />
        <p className="lh-copy center measure">
          <span className="b">{profile.name}</span> is a {profile.title} from {profile.hometown} currently living and working in{" "}
          <SimpleLink href={`//www.google.com/maps?q=${profile.location}`}>{profile.location}</SimpleLink> who loves making things for the web.
        </p>
        <p>
          <Button to="/about">Read more about him &rarr;</Button>
        </p>
      </div>
    </section>
  );
};

export default Home;
