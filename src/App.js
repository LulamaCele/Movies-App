import './App.css';
import {useEffect} from 'react';
import axios from 'axios';

function App() {
  const getMovies = async () => {
    try{ 
      const data = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies()
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
