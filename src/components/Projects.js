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

      <section className="project">
        <p className="heading"></p>
        <p className="purpose"></p>
        <p className="description"></p>
        <p className="languages"></p>
      </section>
    </main>
  );
}

export default Project;
