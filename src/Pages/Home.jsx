import React from "react";
import "../index.css"; // Ensure your CSS contains styles for the image

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="image-container">
          {/* Replace "earl.jpg" with the actual image path */}
          <img
            src="earl.jpg"
            alt="Earl Lawrence's Portrait"
            className="profile-image"
          />
        </div>
        <div className="text-content">
          <h2>Hello and Welcome!</h2>
          <p>
            Hi, I'm Earl Lawrence—a creative and dedicated developer with a
            flair for design. My passion lies in crafting user-friendly
            solutions and visually engaging experiences. Dive in to discover my
            projects, learn about my journey, and see how I bring ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
