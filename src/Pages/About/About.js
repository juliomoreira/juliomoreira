import React from "react";

import acct from "../../images/jm__employer--acct.png";
import elocc from "../../images/jm__employer--elocc.jpg";
import woodoo from "../../images/jm__employer--woodoo.jpg";
import outgreen from "../../images/jm__employer--outgreen.jpg";

import acct_bg from "../../images/jm__about_acct.jpg";
import elocc_bg from "../../images/jm__about_elocc.jpg";
import woodoo_bg from "../../images/jm__about_woodoo.jpg";
import outgreen_bg from "../../images/jm__about_outgreen.jpg";
import SimpleLink from "../../Components/SimpleLink";

const employers = [
  {
    slug: "acct",
    name: "ACCT | Acupula Consulting & Technology",
    tagline: "Apr 2019 - Sep 2019",
    image: acct,
    bg: acct_bg,
    description:
      "Fullstack E-Commerce development using VTEX IO in a Serverless development environment using mostly ReactJS (ES6/Typescript), NodeJS (Koa.js), GraphQL, Tachyons on an open-source collaborative fashion."
  },
  {
    slug: "elocc",
    name: "Elocc Creative Agency",
    tagline: "Apr 2018 - Apr 2019",
    image: elocc,
    bg: elocc_bg,
    description:
      "Fullstack E-Commerce development using platforms like VTEX IO, MercadoShops and WooCommerce. Leading a team of 5 developers, using technologies like ReactJS (ES6), NodeJS (Express/Adonis), MongoDB, Bootstrap 4, Sass/Stylus also using Agile methods alongside GitFlow and SEMVER."
  },
  {
    slug: "woodoo",
    name: "Woodoo Oficina Web",
    tagline: "Oct 2011 - Feb 2019",
    image: woodoo,
    bg: woodoo_bg,
    description:
      "Fullstack SPAs Development and UI/UX Design, using frameworks like AngularJS, ReactJS, Web Components, Laravel, WordPress, CodeIgniter in a multidisciplinary self-managed team. At Woodoo I’ve grown significantly as an UI/UX Designer and had the opportunity to design and prototype friendly user interfaces as wells as some offline projects doing branding and Graphic Design."
  },
  {
    slug: "outgreen",
    name: "Outgreen Creative Design",
    tagline: "Nov 2009 - Oct 2011",
    image: outgreen,
    bg: outgreen_bg,
    description: "Fullstack Development and Web Design building websites using Wordpress, jQuery, grid-systems, HTML5 and CSS."
  }
];

const About = () => {
  return (
    <article className="w-100 flex flex-column flex-wrap items-center">
      <header className="w-100 tc mb5">
        <h1 className="lh-copy f1 fw5 serif">About</h1>
        <p className="lh-copy">
          These are some of the awesome places where I've worked. You can also check my{" "}
          <SimpleLink href="//linkedin.com/in/hellojuliomoreira">LinkedIn</SimpleLink> for more information.
        </p>
      </header>
      {employers.map(({ slug, image, name, tagline, description, bg }) => (
        <section key={slug} className={`w-100 mb5 flex flex-column justify-end black`}>
          <div className="cover" style={{ backgroundPosition: "center", backgroundImage: `url(${bg})` }}>
            <div className="h5"></div>
            <div className="h2 h4-ns"></div>
          </div>
          <div className="w-100 ph3 pv3 items-center flex flex-column">
            <div className="mw8 center tc">
              <p>
                <img src={image} alt="" className="mw-100 mw4" />
              </p>
              <h3 className="lh-copy f3 fw4">{name}</h3>
              <h5 className="dib ph3 pv2 ma0 lh-copy f5 fw5 mono bb bt bl-0 br-0 b--solid b--near-white">{tagline}</h5>
              <p className="lh-copy measure">{description}</p>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
};

export default About;
