import React, { useEffect, useState } from "react";
import "./Projects.css";
import sanityClient from "../client.js";

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
          <div className="technologies"></div>
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
          <div className="technologies"></div>
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
          <div className="technologies"></div>
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
          <div className="technologies"></div>
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
