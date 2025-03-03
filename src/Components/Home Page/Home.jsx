import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../Api/Api"; // API calls from Api.jsx
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage]);

  const loadMovies = async (page) => {
    const data = await fetchPopularMovies(page);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  return (
    <div className="home-container">
      <div className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>⭐ {movie.vote_average}</p>
            </Link>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          ⬅ Prev
        </button>

        <span> Page {currentPage} of {totalPages} </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Home;
