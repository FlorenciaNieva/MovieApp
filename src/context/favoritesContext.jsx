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

  const data = {};

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
