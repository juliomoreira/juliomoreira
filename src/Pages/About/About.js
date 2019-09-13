import React from "react";

import acct from "../../images/jm__employer--acct.png";
import elocc from "../../images/jm__employer--elocc.jpg";
import woodoo from "../../images/jm__employer--woodoo.jpg";
import outgreen from "../../images/jm__employer--outgreen.jpg";

import acct_bg from "../../images/jm__about_acct.jpg";
import elocc_bg from "../../images/jm__about_elocc.jpg";
import woodoo_bg from "../../images/jm__about_woodoo.jpg";
import outgreen_bg from "../../images/jm__about_outgreen.jpg";
// import matheus from "../../images/jm__employer--matheus.jpg";
// import imarketing from "../../images/jm__employer--imarketing.jpg";
// import procempa from "../../images/jm__employer--procempa.jpg";

const employers = [
  {
    slug: "acct",
    name: "ACCT | Acupula Consulting & Technology",
    tagline: "Apr 2019 – Sep 2019",
    image: acct,
    bg: acct_bg,
    description:
      "Fullstack E-Commerce development using VTEX IO in a Serverless development environment using mostly ReactJS (ES6/Typescript), NodeJS (Koa.js), GraphQL, Tachyons on an open-source collaborative fashion."
  },
  {
    slug: "elocc",
    name: "Elocc Creative Agency",
    tagline: "Apr 2018 – Apr 2019",
    image: elocc,
    bg: elocc_bg,
    description:
      "Fullstack E-Commerce development using platforms like VTEX IO, MercadoShops and WooCommerce. Leading a team of 5 developers, using technologies like ReactJS (ES6), NodeJS (Express/Adonis), MongoDB, Bootstrap 4, Sass/Stylus also using Agile methods alongside GitFlow and SEMVER."
  },
  {
    slug: "woodoo",
    name: "Woodoo Oficina Web",
    tagline: "Oct 2011 – Feb 2019",
    image: woodoo,
    bg: woodoo_bg,
    description:
      "Fullstack SPAs Development and UI/UX Design, using frameworks like AngularJS, ReactJS, Web Components, Laravel, WordPress, CodeIgniter in a multidisciplinary self-managed team. At Woodoo I’ve grown significantly as an UI/UX Designer and had the opportunity to design and prototype friendly user interfaces as wells as some offline projects doing branding and Graphic Design."
  },
  {
    slug: "outgreen",
    name: "Outgreen Creative Design",
    tagline: "Nov 2009 – Oct 2011",
    image: outgreen,
    bg: outgreen_bg,
    description: "Fullstack Development and Web Design building websites using Wordpress, jQuery, grid-systems, HTML5 and CSS."
  }
  // {
  //   slug: "matheus",
  //   name: "Studio Matheus Levi",
  //   tagline: "2009 - 2011",
  //   image: matheus,
  //   description:
  //     "Consequuntur perspiciatis modi atque ducimus nam provident recusandae accusamus, eveniet voluptatum quam. Cumque nesciunt repellendus dolore, facere fuga totam ipsa quam laborum."
  // },
  // {
  //   slug: "imarketing",
  //   name: "Imarketing Digital Business",
  //   tagline: "2006 - 2008",
  //   image: imarketing,
  //   description:
  //     "Consequuntur perspiciatis modi atque ducimus nam provident recusandae accusamus, eveniet voluptatum quam. Cumque nesciunt repellendus dolore, facere fuga totam ipsa quam laborum."
  // },
  // {
  //   slug: "procempa",
  //   name: "Procempa",
  //   tagline: "2005 - 2006",
  //   image: procempa,
  //   description:
  //     "Consequuntur perspiciatis modi atque ducimus nam provident recusandae accusamus, eveniet voluptatum quam. Cumque nesciunt repellendus dolore, facere fuga totam ipsa quam laborum."
  // }
];

const About = () => {
  return (
    <article className="w-100 flex flex-column flex-wrap items-center">
      {employers.map(({ slug, image, name, tagline, description, bg }) => (
        <section key={slug} className={`w-100 mb5 flex flex-column justify-end black`}>
          <div className="cover" style={{ backgroundPosition: "center", backgroundImage: `url(${bg})` }}>
            <div className="h5"></div>
            <div className="h3 h5-ns"></div>
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
