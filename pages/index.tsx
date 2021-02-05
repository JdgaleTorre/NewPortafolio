import Head from "next/head";
import HeaderComponent from "../components/Header";
import React from "react";
import PresentationComponent from "../components/Presentation";
import SkillsComponent from "../components/Skills";
import TextSectionComponent from "../components/TextSection";
import ResumeComponent from "../components/Resume";

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
                  Since beginning my journey as a freelance designer nearly 10
                  years ago, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products for both business and consumer use. I'm
                  quietly confident, naturally curious, and perpetually working
                  on improving my chops one design problem at a time.
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
              </div>
            </div>
            <div className="column">Pomodoro Timer</div>
            <div className="column">Knight's tour</div>
            <div className="column">Chat Room</div>
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
