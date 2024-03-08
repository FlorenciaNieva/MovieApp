import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DetailsMovie from "./components/DetailsMovie/DetailsMovie";
import ContainPremieres from "./components/ContainPremieres/ContainPremieres";
import ContainPopular from "./components/ContainPopular/ContainPopular";
import ContainFavorites from "./components/ContainFavorites/ContainFavorites";
import ContaineSearch from "./components/ContainSearch/ContainSearch";
import FavoritesContextProvider from "./context/favoritesContext";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <FavoritesContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<DetailsMovie />} />
            <Route path="/premieres" element={<ContainPremieres />} />
            <Route path="/popular" element={<ContainPopular />} />
            <Route path="/favorites" element={<ContainFavorites />} />
            <Route path="/search" element={<ContaineSearch />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </FavoritesContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
