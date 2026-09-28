import type { Movie } from "../types/movie";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="movie-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-modal"
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={movie.image}
          alt={movie.title}
        />

        <div className="movie-modal-content">
          <h2>{movie.title}</h2>

          <p>Genre: {movie.genre}</p>

          <p>Rating: ⭐ {movie.rating}</p>

          <p>
            Status:{" "}
            {movie.watched
              ? "Watched"
              : "Not watched"}
          </p>

          <p>
            Watchlist:{" "}
            {movie.inWatchList
              ? "In watchlist"
              : "Not in watchlist"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;