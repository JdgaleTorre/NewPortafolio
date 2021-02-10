import Head from "next/head";
import HeaderComponent from "../components/Header";
import React from "react";
import PresentationComponent from "../components/Presentation";
import SkillsComponent from "../components/Skills";
import TextSectionComponent from "../components/TextSection";
import ResumeComponent from "../components/Resume";
import PortfolioComponent from "../components/Portfolio";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jose David Gale</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent></HeaderComponent>
      <PresentationComponent></PresentationComponent>
      <div className="message">
        <TextSectionComponent>
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                Nice to meet you.
              </h1>
              <h2 className="subtitle is-size-5-desktop">
                I'm quietly confident, naturally curious, and perpetually
                working on improving my developing skills. I hope you like my
                work (You can see it{" "}
                <a className="contrast-color" href="#portfolio">
                  here
                </a>
                ).
              </h2>
            </div>
          </div>
        </TextSectionComponent>
      </div>
      <ResumeComponent></ResumeComponent>
      <PortfolioComponent></PortfolioComponent>
      <SkillsComponent></SkillsComponent>

      {/* <footer className="section is-primary has-text-centered">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer> */}
      <section
        className="section is-medium has-text-centered is-long mb-6"
        id="aboutMe"
      >
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                About Me
              </h1>
              <h2 className="subtitle is-size-5-desktop">
                I'm a developer from Honduras, I've been working since 2011 as a
                developer for a pharmacy with an in-house Point of Sales, in
                these years I helped improving the POS, implementing new
                technologies and third-party functionality, like integrating
                direct payment with PinPAD. I have a background in C#, API rest,
                Graphql, SQL, NoSql, Scrum. In 2018 I got a{" "}
                <a
                  href="https://confirm.udacity.com/EWPDCHSP"
                  target="_blank"
                  className="secondary-color"
                >
                  NanoDegree
                </a>{" "}
                from Udacity, on Front End Developer.
                <br />
              </h2>
              <h2 className="subtitle is-size-5-desktop">
                I’m looking forward to working together.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-primary is-long has-text-centered">
        <div className="container">
          <div className="box bg-secondary">
            <h1 className="title">Got any questions?</h1>
            <a
              className="button is-primary is-large"
              href="mailto:josedavidgale@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="section bg-primary is-small has-text-centered">
        <div className="hero is-primary">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column ">
                <h1 className="title is-size-4-touch">
                  I hope you found what you were searching for.
                </h1>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column ">
                <a
                  href="https://github.com/JdgaleTorre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-medium mr-2">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/josedavidgale/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-medium mr-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>

                <a
                  href="mailto:josedavidgale@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon is-medium mr-2">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
