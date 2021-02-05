import React from "react";
import Image from "next/image";

const SkillsComponent = (): JSX.Element => {
  return (
    <>
      <section className="hero is-primary has-text-centered">
        <div className="container">
          <div className="hero-body">
            <div className="columns">
              <div className="column">
                <Image
                  src="/svg/undraw_Scrum_board_re_wk7v.svg"
                  alt="Picture of code"
                  width="450"
                  height="350"
                />
              </div>
              <div className="column">
                <div className="title">
                  <strong>Skills</strong>
                </div>
                <div className="columns  is-mobile is-flex-wrap-wrap">
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/html5.svg"
                          alt="Logo of html"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/css3.svg"
                          alt="Logo of css"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/sass-1.svg"
                          alt="Logo of sass"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/javascript.svg"
                          alt="Logo of javascript"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/angular-icon-1.svg"
                          alt="Logo of angular"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/react-2.svg"
                          alt="Logo of react"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/nextjs-3.svg"
                          alt="Logo of nextJs"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/graphql.svg"
                          alt="Logo of graphql"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/mongodb.svg"
                          alt="Logo of mongodb"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/bootstrap-4.svg"
                          alt="Logo of bootstrap"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile">
                    <div className="card">
                      <div className="card-content">
                        <Image
                          src="/svg/bulma.svg"
                          alt="Logo of Bulma"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsComponent;
