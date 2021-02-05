import React from "react";

const HeaderComponent = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">Jose David Gale</a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Resume</a>
              <a className="navbar-item">Skills</a>
              <a className="navbar-item">About Me</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <a className="button is-primary">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderComponent;
