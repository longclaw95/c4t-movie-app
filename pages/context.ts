import { createContext, useContext } from "react";
import { Movies } from "../movies";

export interface GlobalContent {
  movies: Movies[];
  setMovies: (movies: Movies[]) => void;
}

export const MyGlobalContext = createContext<GlobalContent>({
  movies: [],
  setMovies: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
