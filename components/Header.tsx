import Link from "next/link";
import React from "react";

const HeaderComponent = (): JSX.Element => {
  const navBurgerClick = (e) => {
    var NavBurger = document.getElementById("navbar-burger");
    var NavMenu = document.getElementById("navbar-menu");

    NavBurger.classList.toggle("is-active");
    NavMenu.classList.toggle("is-active");
  };

  return (
    <nav
      className="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            {/* <Image
              className="navbar-item"
              src="/svg/drawing.svg"
              alt="Logo"
              width="400"
              height="200"
            /> */}
            Jose David Gale
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            id="navbar-burger"
            onClick={navBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-menu" className="navbar-menu">
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
              <Link href="/contact">
                <a
                  className="button is-primary"
                >
                  <span>Contact Me</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
