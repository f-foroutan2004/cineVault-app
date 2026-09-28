import type { Movie } from "../types/movie";
import allHerFault from "../assets/All_Her_Fault_Poster.jpg";
import myFault from "../assets/images.jpg";
import yourFault from "../assets/images (1).jpg";
import iWillFindYou from "../assets/images (2).jpg";
import moneyHeist from "../assets/images (3).jpg";

export const movies: Movie[] = [
  {
    id: 1,
    title: "all her fault",
    genre: "drama",
    rating: 10,
    image: allHerFault,
    watched: true,
    inWatchList: true,
  },
  {
    id: 2,
    title: "my fault",
    genre: "romantic",
    rating: 7,
    image: myFault,
    watched: true,
    inWatchList: false,
  },
  {
    id: 3,
    title: "your fault",
    genre: "romantic",
    rating: 8,
    image: yourFault,
    watched: false,
    inWatchList: false,
  },
  {
    id: 4,
    title: "i will find you",
    genre: "drama",
    rating: 9.5,
    image: iWillFindYou,
    watched: true,
    inWatchList: true,
  },
  {
    id: 5,
    title: "money Heist",
    genre: "action",
    rating: 10,
    image: moneyHeist,
    watched: true,
    inWatchList: true,
  },
];
