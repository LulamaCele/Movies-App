import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const MoviePage = ({ movies }) => {
  const { name } = useParams();

  return (
    <section>
      <div className="container">
        {movies
          .filter((movie) => movie.name === name)
          .map((movie, index) => (
            <div key={index} className="container">
              <h1>{movie.name}</h1>
              <div className="img-container">
                <img src={movie.img_link} />
              </div>
              <div className="details-container">
                <div>
                  <button>Trailer</button>
                  <p>IMDB: {movie.imdb_rating}</p>
                </div>
                <p className="description">
                  In a war-torn feudal Japan loaded with mechs as well as magic,
                  the greatest ronin never understood, Yasuke, has a hard time
                  to preserve a tranquil presence after a past life of violence.
                </p>
                <div className="movie-details-container">
                  <div className="movie-details">
                    <span>Released: {movie.year}</span>
                    <span>Duratoin: {movie.duration} min</span>
                  </div>
                  <div className="movie-details">
                    <span>Genre: {movie.genre}</span>
                    <span>Writer: {movie.writer_name}</span>
                  </div>
                  <div className="movie-details">
                    <span>Casts: {movie.cast_name}</span>
                    <span>Director: {movie.director_name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
