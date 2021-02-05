import Head from "next/head";
import HeaderComponent from "../components/Header";
import React from "react";
import PresentationComponent from "../components/Presentation";
import SkillsComponent from "../components/Skills";
import TextSectionComponent from "../components/TextSection";
import ResumeComponent from "../components/Resume";

import { faArrowCircleRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent></HeaderComponent>
      <PresentationComponent></PresentationComponent>
      <div className="message">
        <TextSectionComponent>
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                  Nice to meet you.
                </h1>
                <h2 className="subtitle is-size-5-desktop">
                  I'm a developer who always wants to learn more and keep
                  improving my skills. I like to learn
                  various programming languages, I prefer to work as web
                  developer because it’s more interesting and always keep
                  changing. I’m ambitious always want to make the different, to
                  give a little bit more than the people expect to me. Right now
                  I want to work in an exciting company.
                </h2>
              </div>
            </div>
          </div>
        </TextSectionComponent>
      </div>
      <ResumeComponent></ResumeComponent>
      <section className="hero has-text-centered">
        <div className="hero-body">
          <div className="title">See my Work</div>
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Game of Life</div>
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
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Pomodoro Timer</div>
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
            <div className="column">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Knight's tour</div>
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
            <div className="column">
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
      <SkillsComponent></SkillsComponent>

      <footer className="section is-primary has-text-centered">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
