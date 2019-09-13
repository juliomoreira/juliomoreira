import React from "react";
import { Link } from "react-router-dom";

import spoiler_thumb from "../../images/jm__work--spoiler.png";
import ienem_thumb from "../../images/jm__work--ienem.png";
import fleming_thumb from "../../images/jm__work--fleming.png";
import cmh_thumb from "../../images/jm__work--clube-minha-horta.png";

const works = [
  {
    slug: "spoiler",
    thumb: spoiler_thumb
  },
  {
    slug: "ienem",
    thumb: ienem_thumb
  },
  {
    slug: "fleming",
    thumb: fleming_thumb
  },
  {
    slug: "clube-minha-horta",
    thumb: cmh_thumb
  }
];

const Works = () => {
  return (
    <article className="w-100">
      <div className="mw8 center tc ph3">
        <h1 className="lh-copy f1 fw5 serif">Works</h1>
        <p className="lh-copy">
          <span role="img" aria-label="Construction Sign">
            🚧
          </span>{" "}
          Under construction...
        </p>
      </div>
      <div className="flex flex-wrap">
        {works.map(({ slug, thumb }) => {
          return (
            <Link to={`/works/${slug}`} className="db w-100 w-50-ns w-33-m w-25-l dim" key={slug}>
              <div className="aspect-ratio aspect-ratio--4x3">
                <div className="aspect-ratio--object cover" style={{ backgroundImage: `url('${thumb}')`, backgroundPosition: "center" }}></div>
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
};

export default Works;
