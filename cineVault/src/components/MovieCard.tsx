import type { Movie } from "../types/movie";
import "../index.css";

interface MovieCardProps {
  movie: Movie;
  onToggleWatched: (id: number) => void;
  onToggleWatchList: (id: number) => void;
}

function MovieCard({
  movie,
  onToggleWatched,
  onToggleWatchList,
}: MovieCardProps) {
  function handleWatchClick() {
    onToggleWatched(movie.id);
  }
  function handleWatchListClick() {
   onToggleWatchList(movie.id);
  }

  return (
    <div className="card">
      <div className="upPart">
        <img src={movie.image} alt="" />
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <p>{movie.rating}</p>
        <span>{movie.watched ? "watched" : "not watched"}</span>
      </div>

      <div className="buttons">
        <button className="watchBtn" onClick={handleWatchClick}>
          {movie.watched ? "unwatch" : "watch"}
        </button>
        <button className="watchListBtn" onClick={handleWatchListClick}>
          {movie.inWatchList ? "remove from list" : "add to watch list"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
