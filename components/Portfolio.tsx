import React from "react";
import { faArrowCircleRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioComponent = (): JSX.Element => {
  return (
    <div className="container" id="portfolio">
      <section className="hero has-text-centered">
        <div className="hero-body">
          <div className="title">See my Work</div>
          <div className="columns is-flex-wrap-wrap">
            <div className="column is-one-third">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Game of Life</div>
                </div>
                <div className="card-content">
                  <div className="content">
                    Also know as <strong>Life</strong>, is a cellular automaton
                    devised by the British mathematician John Horton Conway in
                    1970.{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                      target="_blank"
                      className="special-link"
                      rel="noopener noreferrer"
                    >
                      - Wikipedia
                    </a>
                    <br />
                    <br />
                    <div className="tags">
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-primary">Html</span>
                      <span className="tag is-primary">CSS</span>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://jdgaletorre.github.io/GameOfLife2/"
                    target="_blank"
                    className="card-footer-item"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JdgaleTorre/GameOfLife2"
                    target="_blank"
                    className="card-footer-item"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    View Code
                  </a>
                </footer>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Pomodoro Timer</div>
                </div>
                <div className="card-content">
                  <div className="content">
                    The Pomodoro Technique uses a timer to break down work into
                    intervals, traditionally 25 minutes in length, separated by
                    short breaks.{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                      target="_blank"
                      className="special-link"
                      rel="noopener noreferrer"
                    >
                      - Wikipedia
                    </a>
                    <br />
                    <br />
                    <div className="tags">
                      <span className="tag is-primary">NextJs</span>
                      <span className="tag is-primary">PWA</span>
                      <span className="tag is-primary">Html</span>
                      <span className="tag is-primary">CSS</span>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://pomodoro-timer-lac.vercel.app/"
                    rel="noopener noreferrer"
                    className="card-footer-item"
                    target="_blank"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JdgaleTorre/PomodoroTimer"
                    rel="noopener noreferrer"
                    className="card-footer-item"
                    target="_blank"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    View Code
                  </a>
                </footer>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Knight's tour</div>
                </div>
                <div className="card-content">
                  <div className="content">
                    A knight's tour is a sequence of moves of a knight on a
                    chessboard such that the knight visits every square exactly
                    once.
                    <br />
                    <br />
                    <div className="tags">
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-primary">Html</span>
                      <span className="tag is-primary">CSS</span>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://jdgaletorre.github.io/KnightTour/"
                    target="_blank"
                    className="card-footer-item"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JdgaleTorre/KnightTour"
                    target="_blank"
                    className="card-footer-item"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    View Code
                  </a>
                </footer>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Memory Game</div>
                </div>
                <div className="card-content">
                  <div className="content">
                    Memory Game are games that require players to match similar
                    elements. As the name implies, participants need to find a
                    match for a word, picture, or card. For example, students
                    place 30 word cards; composed of 15 pairs, face down in
                    random order. In this case there its 8 pairs of symbols.
                    <br />
                    <br />
                    <div className="tags">
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-primary">Html</span>
                      <span className="tag is-primary">CSS</span>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <a
                    href="https://jdgaletorre.github.io/MemoryGame/"
                    target="_blank"
                    className="card-footer-item"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JdgaleTorre/MemoryGame"
                    target="_blank"
                    className="card-footer-item"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    View Code
                  </a>
                </footer>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Chat Room</div>
                </div>
                <div className="card-content">
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item">
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    Demo
                  </a>
                  <a href="#" className="card-footer-item">
                    <span className="icon is-medium mr-3">
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    View Code
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioComponent;
