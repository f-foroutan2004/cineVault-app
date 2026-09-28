import { useState } from "react";
import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import type { Movie } from "./types/movie";
import WatchList from "./components/WatchList";
import MovieModal from "./components/MovieModal";

function App() {
  const [movieList, setMovieList] = useState<Movie[]>(movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Selected movie for modal
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

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
        movie.id === id
          ? { ...movie, inWatchList: !movie.inWatchList }
          : movie,
      ),
    );
  }

  const watchedMovies = movieList.filter((movie) => movie.watched);

  const watchListMovies = movieList.filter((movie) => movie.inWatchList);

  const genres = movieList.map((movie) => movie.genre);

  const uniqueGenres = [...new Set(genres)];

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

          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="clearSearchBtn"
          onClick={() => setSearchTerm("")}
        >
          clear
        </button>
      </div>

      <div className="stats">
        <span>Watched movies: {watchedMovies.length}</span>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onToggleWatched={handleToggleWatched}
              onToggleWatchList={handleToggleWatchList}
              onSelectMovie={setSelectedMovie}
            />
          ))}
        </div>
      ) : (
        <p className="noSearchedMovie">no result found</p>
      )}

      <WatchList
        movies={watchListMovies}
        onToggleWatched={handleToggleWatched}
        onToggleWatchList={handleToggleWatchList}
      />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}

export default App;