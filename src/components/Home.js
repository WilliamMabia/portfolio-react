import React from 'react'
import "./Style.css";
import image from "../img/memoji.png";

function Home() {
    return (
        <main>
            <section className = "container">
                <div className="section-1">
                    <img src={image} alt="me"/>
                </div>
                
                <div class="top-left">
                    <img class="memoji" src={image} alt="profile picture"/>
                </div>
                
                <div class="top-right">
                    <p><span class="text-em">Hi </span>My name's
                    <span
                    class="txt-type"
                    data-wait="3000"
                    data-words='["Will", "William"]'
                    ></span>
                    </p>
                </div>
                
                <div class="bottom">
                    <p class="text-grey">
                        I am specializing in 
                    <span class="text-white" >software engineering, full-stack development, and user experience
                    design</span> with a passion for building products for the future.</p>
                    <p class="text-grey">
                    I am at my best when working with a team under tough constraints to
                    deliver beautiful, usable, scalable solutions that add value to the
                    lives of human beings everywhere.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home
