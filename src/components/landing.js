import React, { useEffect, useState } from "react";
import "./Landing.css";

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "images/STAM_Logo_Text.png",
    "images/creepy-deer.png",
    "images/snail-devil-speech.png",
    "images/giraffe-man.png",
    "images/STAM_Logo2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
      <section className="landing">
        <div className="landing-content">
          <h1>STAM</h1>
          <p>
            Using AI to make speech therapy fun!
            <br />
            New to Stam? Sign up below
          </p>
          <div className="buttons">
            <a href="#" className="btn primary">
              Get started
            </a>
            <a href="#" className="btn secondary">
              Log in
            </a>
          </div>
        </div>
        <div className="image-placeholder">
          {images.map((image, index) => (
            <img
              src={image}
              alt={`Slide ${index}`}
              className={`slide ${index === activeIndex ? "active" : ""}`}
              key={index}
            />
          ))}
        </div>
      </section>
  );
};

export default Landing;
