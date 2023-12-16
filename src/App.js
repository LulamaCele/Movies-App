import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Home } from "./components MovieCard/Home";
import { MoviePage } from "./components MovieCard/MoviePage";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://movies-app.prakashsakari.repl.co/api/movies"
      );
      console.log(data);
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home movies={movies} />} />
        {/* <Route path='/movie-page/' element={<MoviePage />} /> */}
        <Route
          path="/movie-page/:name"
          element={<MoviePage movies={movies} />}
        />
      </Routes>
    </>
  );
}

export default App;
