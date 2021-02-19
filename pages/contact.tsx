import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Contact: NextPage = () => {
  const router = useRouter();
  const formSpreeURL = "https://formspree.io/f/mjvpdbpg";

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        console.log("Succes");
      } else {
        console.log("Error");
      }
    };
    xhr.send(data);
    router.push('/');
  };

  return (
    <>
      <nav
        className="navbar is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">Jose David Gale</a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  className="button is-medium is-ghost"
                  rel="noopener noreferrer"
                  href="/"
                >
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="section has-text-centered">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <h1 className="title is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                Thanks for taking the time to reach out. How can I help you
                today?
              </h1>
              <div className="card">
                <div className="card-content">
                  <form
                    onSubmit={handleSubmit}
                    action={formSpreeURL}
                    method="POST"
                    id="contactForm"
                  >
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label has-text-justified">From</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control is-expanded">
                            <input
                              className="input"
                              type="text"
                              placeholder="Name"
                              name="Name"
                              required
                            />
                          </p>
                        </div>
                        <div className="field">
                          <p className="control is-expanded ">
                            <input
                              className="input"
                              type="email"
                              placeholder="Email"
                              name="Email"
                              required
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field ">
                      <label className="label has-text-justified">
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          placeholder=""
                          name="Message"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <button className="button is-primary is-large">
                          Submit
                        </button>
                      </div>
                    </div>
                    {/* {status === "SUCCESS" ? (
                      <p>Thanks!</p>
                    ) : (
                      <button>Submit</button>
                    )}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>} */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
