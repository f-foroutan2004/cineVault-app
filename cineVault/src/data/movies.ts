import type { Movie } from "../types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "all her fault",
    genre: "drama",
    rating: 10,
    image: "...",
    watched: true,
    inWatchList: true,
  },
  {
    id: 2,
    title: "my fault",
    genre: "romantic",
    rating: 7,
    image: "...",
    watched: true,
    inWatchList: false,
  },
  {
    id: 3,
    title: "your fault",
    genre: "romantic",
    rating: 8,
    image: "...",
    watched: false,
    inWatchList: false,
  },
  {
    id: 4,
    title: "i will find you",
    genre: "drama",
    rating: 9.5,
    image: "...",
    watched: true,
    inWatchList: true,
  },
];
