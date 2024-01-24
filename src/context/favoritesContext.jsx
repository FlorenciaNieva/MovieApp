import { createContext } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const data = {};

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
