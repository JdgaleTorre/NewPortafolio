import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioComponent = (): JSX.Element => {
  const projects = [
    {
      title: "Game of Life",
      content: `Also known as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.`,
      wikipedia: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "https://jdgaletorre.github.io/GameOfLife2/",
      code: "https://github.com/JdgaleTorre/GameOfLife2"
    },
    {
      title: "Pomodoro Timer",
      content: `The Pomodoro Technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.`,
      wikipedia: "https://en.wikipedia.org/wiki/Pomodoro_Technique",
      tags: ["NextJS", "PWA", "HTML", "CSS"],
      demo: "https://pomodoro-timer-lac.vercel.app/",
      code: "https://github.com/JdgaleTorre/PomodoroTimer"
    },
    {
      title: "Knight's Tour",
      content: `A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square exactly once.`,
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "https://jdgaletorre.github.io/KnightTour/",
      code: "https://github.com/JdgaleTorre/KnightTour"
    },
    {
      title: "Memory Game",
      content: `Memory games require players to match similar elements. Participants need to find a match for a word, picture, or card. For example, students place 30 word cards; composed of 15 pairs, face down in random order. In this case, there are 8 pairs of symbols.`,
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "https://jdgaletorre.github.io/MemoryGame/",
      code: "https://github.com/JdgaleTorre/MemoryGame"
    },
    {
      title: "Pokedex",
      content: `Pokédex is a fan-made website that provides comprehensive information on all Pokémon species. The site features detailed data on each Pokémon, including their types, abilities, evolutions, and moves.`,
      tags: ["Typescript", "NextJs", "HTML", "Tailwind"],
      demo: "https://pokedex.josegale.com",
      code: "https://github.com/JdgaleTorre/Pokedex"
    },
    {
      title: "Movinder",
      content: `This project is a mobile-friendly webpage built with NextJS, designed to collect user ratings for movies. The collected data is used to train a neural network that powers a personalized movie recommendation system. Using content-based filtering, the system analyzes user preferences to suggest films that match their tastes.`,
      tags: ["Typescript", "NextJs", "Prisma", "Tailwind", "Data Analytics"],
      demo: "https://movinder.josegale.com",
      code: "https://github.com/JdgaleTorre/Pokedex"
    }
  ];


  return (
    <div className="container" id="portfolio">
      <section className="hero has-text-centered">
        <div className="hero-body">
          <div className="title">See my Work</div>
          <div className="columns is-flex-wrap-wrap">
            {projects.map(project => {
              return <div className="column is-one-third" key={project.title}>
                <div className="card portafolio">
                  <div className="card-header">
                    <div className="card-header-title">{project.title}</div>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <div dangerouslySetInnerHTML={{ __html: project.content }} />
                      <br />
                      <br />
                      <div className="tags">
                        {project.tags.map(tag => {
                          return <span className="tag is-primary" key={tag}>{tag}</span>
                        })}
                      </div>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a
                      href={project.demo}
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
                      href={project.code}
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
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioComponent;
