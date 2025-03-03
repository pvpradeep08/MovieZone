import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavBar";
import Home from "./Components/Home Page/Home";
import About from "./Components/About/About";
import Search from "./Components/Home Page/Search";
import MovieDetail from "./Components/MovieDetails/MovieDetails";
import Footer from "./Components/Footer/Footer";
import "./App.css";


const App = () => {
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <Navbar setMovies={setMovies} />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
