import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import {
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieTrailer,
} from "../Api/Api";
import "./MovieDetails.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      const castData = await fetchMovieCast(id);
      const trailer = await fetchMovieTrailer(id);

      setMovie(movieData);
      setCast(castData);
      setTrailerKey(trailer);
    };

    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      {/* Background Image with Fallback */}
      <img
        className="background"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
        alt={movie.title}
      />

      <div className="content">
        <h1>{movie.title}</h1>

        {/* Movie Poster */}
        <img
          className="background"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : `https://image.tmdb.org/t/p/w500${movie.poster_path}` // Fallback
          }
          alt={movie.title}
        />

        <p className="overview">{movie.overview}</p>
        <p className="rating">⭐ Rating: {movie.vote_average}</p>

        {/* Cast Section */}
        <div className="cast">
          <h3>Cast</h3>
          <div className="cast-container">
            {cast.slice(0, 6).map((actor) => (
              <div className="cast-card" key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "https://via.placeholder.com/100x140?text=No+Image"
                  }
                  alt={actor.name}
                />
                <p>{actor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Watch Trailer Button */}
        {trailerKey && (
          <button className="trailer-button" onClick={() => setShowTrailer(true)}>
            🎥 Watch Trailer
          </button>
        )}

        {/* YouTube Trailer Popup */}
        {showTrailer && (
          <div className="trailer-popup">
            <YouTube videoId={trailerKey} className="youtube-video" />
            <button className="close-button" onClick={() => setShowTrailer(false)}>
              ✖ Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
