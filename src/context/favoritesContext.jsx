import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [allFavorites, setAllFavorites] = useState([]);
  const [getItem, saveItem] = useLocalStorage("favorites");

  useEffect(() => {
    setAllFavorites(getItem());
  }, []);

  function addFavorite(movie) {
    saveItem([...allFavorites, movie]);
    setAllFavorites([...allFavorites, movie]);
  }

  function removeFavorite(idMovie) {
    saveItem(allFavorites.filter((movie) => movie.id !== idMovie));
    setAllFavorites(
      allFavorites.filter((movie) => movie.id !== idMovie)
    );
  }

  function isFavorite(idMovie) {
    return allFavorites.some((movie) => movie.id === idMovie);
  }

  const data = {
    allFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
