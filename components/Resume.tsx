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
                <div className="subtitle">Github</div>
                <Image
                  src="/svg/icons8-github.svg"
                  alt="Logo of github"
                  width="100"
                  height="100"
                />
              </div>
              <div className="column is-clickable">
                <div className="subtitle">Linked In</div>
                <Image
                  src="/svg/linkedin-icon-2.svg"
                  alt="Logo of linkedIn"
                  width="100"
                  height="100"
                />
              </div>
              <div className="column is-clickable">
                <div className="subtitle">Get My Resume</div>
                <Image
                  src="/svg/undraw_Resume_re_hkth.svg"
                  alt="Resume picture"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeComponent;
