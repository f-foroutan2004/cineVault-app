import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";
import "../index.css";

interface WatchListProps {
  movies: Movie[];
  onToggleWatched: (id: number) => void;
  onToggleWatchList: (id: number) => void;
  onSelectMovie: (movie: Movie) => void;
}

function WatchList({
  movies,
  onToggleWatched,
  onToggleWatchList,
  onSelectMovie,
}: WatchListProps) {
  return (
    <>
      <h2 className="watch-title">WATCH LIST ({movies.length})</h2>

      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWatched={onToggleWatched}
              onToggleWatchList={onToggleWatchList}
              onSelectMovie={onSelectMovie}
            />
          ))}
        </div>
      ) : (
        <p className="errorP">no movies in list</p>
      )}
    </>
  );
}

export default WatchList;