import Head from "next/head";
import HeaderComponent from "../components/Header";
import React from "react";
import Link from "next/link";
import PresentationComponent from "../components/Presentation";
import SkillsComponent from "../components/Skills";
import TextSectionComponent from "../components/TextSection";
import ResumeComponent from "../components/Resume";
import PortfolioComponent from "../components/Portfolio";
import FooterComponent from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jose David Gale</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent />
      <PresentationComponent />
      <div className="message">
        <TextSectionComponent>
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                Nice to meet you.
              </h1>
              <h2 className="subtitle is-size-5-desktop">
                {`I'm quietly confident, naturally curious, and perpetually
                working on improving my developing skills. I hope you like my
                work (You can see it `}
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
                {`I'm a developer from Honduras, I've been working since 2011 as a
                developer for a pharmacy with an in-house Point of Sales, in
                these years I helped improving the POS, implementing new
                technologies and third-party functionality, like integrating
                direct payment with PinPAD. I have a background in C#, API rest,
                Graphql, SQL, NoSql, Scrum. In 2018 I got a `}
                <a
                  href="https://confirm.udacity.com/EWPDCHSP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special-link"
                >
                  NanoDegree
                </a>{" "}
                from Udacity, on Front End Developer.
                <br />
              </h2>
              <h2 className="subtitle is-size-5-desktop">
                {`I’m looking forward to working together.`}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-primary is-long has-text-centered">
        <div className="container">
          <div className="box bg-secondary">
            <h1 className="title">Got any questions?</h1>
            <Link href="/contact">
              <a className="button is-primary is-large">
                <span>Contact Me</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
}
