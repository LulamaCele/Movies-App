import "./MovieCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const MovieCard = ({ movies }) => {
 
  return (
    <div>
      {movies && movies.map((movie) => {
        return (
          <div key={movie.id} className="card-container">
            <div className="card-img-container">
            
              <img alt="" className="card-img" src={movie.img_link} />
            </div>
            <div className="card-details">
              <div>
                <span className="title">{movie.name}</span>
              </div>
              <div>
                <span className="genre">Genre: {movie.genre}</span>
              </div>
              <div className="ratings">
                <span>Rating: {movie.imdb_rating}</span>
                <span>Duration: {movie.duration} min</span>
              </div>
            </div>
            <link to={`/movie-page/${movie.name}`}>More</link>
          </div>
        );
      })}
    </div>
  );
};
