import React from "react";

const HeaderComponent = (): JSX.Element => {
  return (
    <div>
      <div className="container">
        <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
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
              <a
                className="navbar-item"
                href="https://github.com/JdgaleTorre/JdgaleTorre/raw/master/resume/JoseDavidGale_Resume.pdf"
                rel="noopener noreferrer"
              >
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
                <a
                  className="button is-primary"
                  rel="noopener noreferrer"
                  href="/contact"
                >
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
