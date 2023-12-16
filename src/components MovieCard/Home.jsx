import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "../components MovieCard/MovieCard";
import { MoviePage } from "./MoviePage";

export const Home = ({ movies }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <div className="header">
        <h1 className="heading-1">Movies</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search movie title"
            value={searchText}
          />
        </form>
      </div>

      <main>
        {movies
          .filter((movie) => {
            return searchText.toLowerCase() === ""
              ? movie
              : movie.name.toLowerCase().includes(searchText);
          })
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </main>
    </div>
  );
};

export default Home;
