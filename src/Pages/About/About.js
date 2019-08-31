import React from "react";

import acct from "../../images/jm__employer--acct.png";
import elocc from "../../images/jm__employer--elocc.jpg";
import woodoo from "../../images/jm__employer--woodoo.jpg";
import outgreen from "../../images/jm__employer--outgreen.jpg";
// import matheus from "../../images/jm__employer--matheus.jpg";
// import imarketing from "../../images/jm__employer--imarketing.jpg";
// import procempa from "../../images/jm__employer--procempa.jpg";

const employers = [
  {
    slug: "acct",
    name: "ACCT ",
    tagline: "Apr 2019 – Present",
    image: acct,
    description:
      "Consequuntur perspiciatis modi atque ducimus nam provident recusandae accusamus, eveniet voluptatum quam. Cumque nesciunt repellendus dolore, facere fuga totam ipsa quam laborum."
  },
  {
    slug: "elocc",
    name: "Elocc Creative Agency",
    tagline: "Apr 2018 – Apr 2019",
    image: elocc,
    description:
      "Consequuntur perspiciatis modi atque ducimus nam provident recusandae accusamus, eveniet voluptatum quam. Cumque nesciunt repellendus dolore, facere fuga totam ipsa quam laborum."
  },
  {
    slug: "woodoo",
    name: "Woodoo Oficina Web",
    tagline: "Oct 2011 – Feb 2019",
    image: woodoo,
    description:
      "Consequuntur perspiciatis modi atque ducimus nam provident recusandae accusamus, eveniet voluptatum quam. Cumque nesciunt repellendus dolore, facere fuga totam ipsa quam laborum."
  },
  {
    slug: "outgreen",
    name: "Outgreen Creative Design",
    tagline: "Nov 2009 – Oct 2011",
    image: outgreen,
    description:
      "Consequuntur perspiciatis modi atque ducimus nam provident recusandae accusamus, eveniet voluptatum quam. Cumque nesciunt repellendus dolore, facere fuga totam ipsa quam laborum."
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
    <article className="page page--about">
      {employers.map(({ slug, image, name, tagline, description }) => (
        <section className={`content content--${slug}`}>
          <div className="employer">
            <div className="container">
              <div className="employer__avatar">
                <img src={image} alt="" />
              </div>
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <h2 className="employer__name">{name}</h2>
                <h4 className="employer__tagline">{tagline}</h4>
                <p className="employer__description">{description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
};

export default About;
