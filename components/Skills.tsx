import React from "react";
import Image from "next/image";

const SkillsComponent = (): JSX.Element => {
  return (
    <>
      <section className="hero is-primary has-text-centered" id="skills">
        <div className="container">
          <div className="hero-body">
            <div className="columns">
              <div className="column margin-auto">
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
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">Html 5</div>
                        <Image
                          src="/svg/html5.svg"
                          alt="Logo of html"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">CSS 3</div>
                        <Image
                          src="/svg/css3.svg"
                          alt="Logo of css"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">Javascript</div>
                        <Image
                          src="/svg/javascript.svg"
                          alt="Logo of javascript"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">Sass</div>
                        <Image
                          src="/svg/sass-1.svg"
                          alt="Logo of sass"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">Angular</div>
                        <Image
                          src="/svg/angular-icon-1.svg"
                          alt="Logo of angular"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">React</div>
                        <Image
                          src="/svg/react-2.svg"
                          alt="Logo of react"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">NextJS</div>
                        <Image
                          src="/svg/nextjs-3.svg"
                          alt="Logo of nextJs"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">Graphql</div>
                        <Image
                          src="/svg/graphql.svg"
                          alt="Logo of graphql"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">MongoDb</div>
                        <Image
                          src="/svg/mongodb-icon-1.svg"
                          alt="Logo of mongodb"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">Bootstrap</div>
                        <Image
                          src="/svg/bootstrap-4.svg"
                          alt="Logo of bootstrap"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-one-quarter-desktop is-half-mobile mb-3">
                    <div className="card skill">
                      <div className="card-content">
                        <div className="skill-title">Bulma</div>
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
