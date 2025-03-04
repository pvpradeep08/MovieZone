import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About This App</h2>
      <p>
        Welcome to the MovieZone This application allows you to
        search for movies, view popular films, and explore details about your
        favorite titles. It is powered by **The Movie Database (TMDb)** API.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>🔍 Search for any movie</li>
        <li>📌 View popular movies</li>
        <li>⭐ See ratings & posters</li>
        <li> You Can Movie details With Cast</li>
        <li>You Can also Watch Trailer of the Movie </li>
      </ul>
      <p>Developed by using React & Axios.</p>
    </div>
  );
};

export default About;
