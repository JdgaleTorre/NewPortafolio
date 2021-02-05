import React from "react";
import Image from "next/image";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PresentationComponent = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <section className="hero has-text-centered">
          <div className="hero-body">
            <div className="columns is-desktop is-vcentered">
              <div className="column">
                <div className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Hi, I'm <br /> <strong>Jose David Gale.</strong>
                  <div className="subtitle">
                    I'm a Front End Developer from Honduras.
                  </div>
                </div>
                <button className="button is-primary">
                  <span>Information About Me</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </span>
                </button>
              </div>
              <div className="column">
                <Image
                  src="/svg/undraw_Code_review_re_woeb.svg"
                  alt="Picture of code"
                  width="450"
                  height="350"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PresentationComponent;