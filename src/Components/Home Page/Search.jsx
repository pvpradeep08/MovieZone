import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Search.css";

const API_KEY = "e98a07f60a865f1e7c26716371a57318";
const BASE_URL = "https://api.themoviedb.org/3";

const Search = () => {
  const { query } = useParams(); // Get search query from URL
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      if (!query) return; // Ensure query is not empty

      try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
          params: {
            api_key: API_KEY,
            query: query,
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearch();
  }, [query]); // Runs when query updates

  return (
    <div className="movie-container">
      <h2>Search Results for "{query}"</h2>
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
        <p>No movies found</p>
      )}
    </div>
  );
};

export default Search;
