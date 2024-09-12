import { useEffect } from "react";
import "./App.css";
import { getMovieList } from "./api.js";
function App() {
  useEffect(() => {
    getMovieList();
  }, []);
  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Hello world</h1>
        <input
          placeholder="Cari film...."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh Pertama</div>
            <div className="Movie-image" src=""></div>
            <div className="Movie-date">11-22-2024</div>
            <div className="Movie-rate">8.9</div>
          </div>
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh Pertama</div>
            <div className="Movie-image" src=""></div>
            <div className="Movie-date">11-22-2024</div>
            <div className="Movie-rate">8.9</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
