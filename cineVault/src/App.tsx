import { useState } from "react";
import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import type { Movie } from "./types/movie";
import WatchList from "./components/WatchList";

function App() {
  const [movieList, setMovieList] = useState<Movie[]>(movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  function handleToggleWatched(id: number) {
    setMovieList((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  }

  function handleToggleWatchList(id: number) {
    setMovieList((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, inWatchList: !movie.inWatchList } : movie,
      ),
    );
  }

  const watchedMovies = movieList.filter((movie) => movie.watched);

  const watchListMovies = movieList.filter((movie) => movie.inWatchList);

  const filteredMovies = movieList.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "all" || movie.genre === selectedGenre),
  );

  return (
    <>
      <div className="controls">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="all">All genres</option>
          <option value="drama">Drama</option>
          <option value="romantic">Romantic</option>
        </select>

        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="stats">
        <span>Watched movies: {watchedMovies.length}</span>
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            onToggleWatched={handleToggleWatched}
            onToggleWatchList={handleToggleWatchList}
          />
        ))}
      </div>

      <WatchList
        movies={watchListMovies}
        onToggleWatched={handleToggleWatched}
        onToggleWatchList={handleToggleWatchList}
      />
    </>
  );
}

export default App;
