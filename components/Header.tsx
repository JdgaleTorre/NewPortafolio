import React from "react";

const HeaderComponent = (): JSX.Element => {
  return (
    <div >
      <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">Jose David Gale</a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="#resume">
                Resume
              </a>
              <a className="navbar-item" href="#skills">
                Skills
              </a>
              <a className="navbar-item" href="#aboutMe">
                About Me
              </a>
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
    </div>
  );
};

export default HeaderComponent;
