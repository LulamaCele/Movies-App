import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCard } from './components MovieCard/MovieCard';
import { SearchBox } from './components MovieCard/SearchBox';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getMovies = async () => {
    try {
      const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <h1 className='heading-1'>Movies</h1>
        <form>
          <input onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder='Search movie title'
            value={searchText} />
        </form>
      </div>

      <main>
        {movies.filter((movie) => {
          return searchText.toLowerCase() === ''
            ? movie
            : movie.name.toLowerCase().includes(searchText);
        })
          .map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </main>

    </div>
  );
}

export default App;
