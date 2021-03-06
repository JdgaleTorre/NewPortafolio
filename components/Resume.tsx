import React from "react";
import Image from "next/image";

const ResumeComponent = (): JSX.Element => {
  return (
    <>
      <section className="has-text-centered">
        <div className="container">
          <div className="box bg-secondary">
            <div className="title">You can find me:</div>
            <div className="columns">
              <div className="column is-clickable">
                <a
                  href="https://github.com/JdgaleTorre"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="subtitle">Github</div>
                  <Image
                    src="/svg/icons8-github.svg"
                    alt="Logo of github"
                    width="100"
                    height="100"
                  />
                </a>
              </div>
              <div className="column is-clickable">
                <a
                  href="https://www.linkedin.com/in/josedavidgale/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="subtitle">Linked In</div>
                  <Image
                    src="/svg/linkedin-icon-2.svg"
                    alt="Logo of linkedIn"
                    width="100"
                    height="100"
                  />
                </a>
              </div>
              <div className="column is-clickable">
                <a
                  href="https://github.com/JdgaleTorre/JdgaleTorre/raw/master/resume/JoseDavidGale_Resume.pdf"
                  rel="noopener noreferrer"
                >
                  <div className="subtitle">Get My Resume</div>
                  <Image
                    src="/svg/undraw_Resume_re_hkth.svg"
                    alt="Resume picture"
                    width="100"
                    height="100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeComponent;
