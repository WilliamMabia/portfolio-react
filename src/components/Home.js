import React from "react";
import "./Home.css";
import "./Utility.css";
import image from "../img/memoji.png";
import { Link } from "react-router-dom";

function Home() {
  const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  };

  // Type Method
  TypeWriter.prototype.type = function () {
    // Current index of word
    const current = this.wordIndex % this.words.length;

    //Get full text of current word/index
    const fullText = this.words[current];

    //check if deleting
    if (this.isDeleting) {
      //Remove character
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      //add character
      this.txt = fullText.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

    //Type speed - wantÂ to be faster when deleting
    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullText) {
      // Pause when done typing
      typeSpeed = this.wait;

      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Move to next word
      this.wordIndex++;

      //pause before restart typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  };

  // Init on DOM load
  document.addEventListener("DOMContentLoaded", init);

  //Init App
  function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    //Initialize typewriter
    new TypeWriter(txtElement, words, wait);
  }
  return (
    <main>
      <section id="landing-page">
        <div class="top-left">
          <img class="memoji" src={image} alt="profile picture" />
        </div>

        <div class="top-right">
          <p>
            <span class="text-em">Hi </span>My name's{" "}
            <span
              class="txt-type"
              data-wait="3000"
              data-words='["Will", "William"]'
            ></span>
          </p>
        </div>

        <div class="bottom">
          <Link to="./contact">
            <p class="text-grey">
              I specialize in
              <span class="text-primary">
                {" "}
                software engineering, full-stack development, and user
                experience design
              </span>{" "}
              with a passion for building products for the future.
            </p>
          </Link>
          <p class="text-grey">
            I am at my best when working with a team under tough constraints to
            deliver beautiful, usable, scalable solutions that add value to the
            lives of human beings everywhere.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;