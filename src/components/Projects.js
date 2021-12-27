import React, { useEffect, useState } from "react";
import "./Projects.css";
import sanityClient from "../client.js";
import { FaPython as Python } from "react-icons/fa";
import { FaHtml5 as Html } from "react-icons/fa";
import { FaCss3Alt as Css } from "react-icons/fa";
import { FaReact as Rt } from "react-icons/fa";
import { SiJavascript as Js } from "react-icons/si";
import { SiC as Cpp } from "react-icons/si";
import { FaJava as Java } from "react-icons/fa";

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="projects">
      <p className="header">
        Projects.{" "}
        <span className="text-grey">
          Take a look at some the projects I have worked on
        </span>
      </p>

      <div className="list">
        <div className="project-1">
          <div className="project-title">Slyx</div>
          <div className="project-description">
            Ryerson University hackathon winner.{" "}
            <span className="text-grey">
              Used distributed computing protocol API and machine learning to
              identify microplastics in images.
            </span>
          </div>
          <div className="technologies">
            <div className="lang-1">
              <span className="icons">
                <Python />
              </span>
              Python
            </div>
            <div className="lang-2">
              <span className="icons">
                <Html />
              </span>
              HTML
            </div>
            <div className="lang-3">
              <span className="icons">
                <Css />
              </span>
              CSS
            </div>
            <div className="lang-4">
              <span className="icons">
                <Rt />
              </span>
              React
            </div>
          </div>
        </div>
        <div className="project-2">
          <div className="project-title">KW Housing</div>
          <div className="project-description">
            School project.{" "}
            <span className="text-grey">
              Built a web application using react for students in the kitchener
              waterloo region to rent houses
            </span>
          </div>
          <div className="technologies">
            <div className="lang-1">
              <span className="icons">
                <Python />
              </span>
              Python
            </div>
            <div className="lang-2">
              <span className="icons">
                <Html />
              </span>
              HTML
            </div>
            <div className="lang-3">
              <span className="icons">
                <Css />
              </span>
              CSS
            </div>
            <div className="lang-4">
              <span className="icons">
                <Rt />
              </span>
              React
            </div>
          </div>
        </div>
        <div className="project-3">
          <div className="project-title">Game Center</div>
          <div className="project-description">
            Personal Side Project.{" "}
            <span className="text-grey">
              A couple of JavaScript games I made will incorporate them into
              this website
            </span>
          </div>
          <div className="technologies">
            <div className="lang-1">
              <span className="icons">
                <Js />
              </span>
              JavaScript
            </div>
          </div>
        </div>
        <div className="project-4">
          <div className="project-title">Encryption Algorithms</div>
          <div className="project-description">
            Personal side project.{" "}
            <span className="text-grey">
              Built programs that applied Huffman Cryptography, Caesar Cipher
              Cryptography, and Hash Chain Encryption to encrypt text files,
              achieving up to 66.98% compression rate on average.
            </span>
          </div>
          <div className="technologies">
            <div className="lang-1">
              <span className="icons">
                <Cpp />
              </span>
              C
            </div>
            <div className="lang-2">
              <span className="icons">
                <Java />
              </span>
              Java
            </div>
          </div>
        </div>
      </div>
      {/*<section className="project">
        <p className="heading"></p>
        <p className="purpose"></p>
        <p className="description"></p>
        <p className="languages"></p>
      </section>*/}
    </main>
  );
}

export default Project;
