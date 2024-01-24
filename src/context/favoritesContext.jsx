import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [allFavorites, setAllFavorites] = useState([]);

  const data = {};

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
