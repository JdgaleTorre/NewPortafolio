import React from "react";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = (): JSX.Element => {
  return (
    <footer className="section bg-primary is-small has-text-centered">
      <div className="hero is-primary">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column ">
              <h1 className="title is-size-4-touch">
                I hope you found what you were searching for.
              </h1>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column ">
              <a
                href="https://github.com/JdgaleTorre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-medium mr-2">
                  <FontAwesomeIcon icon={faGithubSquare} />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/josedavidgale/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-medium mr-2">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>

              <a
                href="mailto:josedavidgale@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-medium mr-2">
                  <FontAwesomeIcon icon={faEnvelopeSquare} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
