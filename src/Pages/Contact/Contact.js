import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="!/contact" className="page page_contact" title="Contact">
        <div className="content-wrapper">
          <div className="content">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod esse dolorem hic, vero ex! Magni atque laudantium tempora, cupiditate dicta
              deleniti aut autem molestias eum ipsum praesentium optio aspernatur, eos.
            </p>
            <ul className="toggle toggle_about">
              <li className="toggle__item">
                <a href="#!/about/work" className="toggle__button active">
                  Work
                </a>
              </li>
              <li className="toggle__item">
                <a href="#!/about/bio" className="toggle__button">
                  Bio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
