import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import ContainDetails from "./components/ContainDetails"
import ContainReleases from "./components/ContainReleases"
import ContainPopular from "./components/ContainPopular"
import ContainFavorites from "./components/ContainFavorites"
import ContaineSearch from "./components/ContainSearch"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ContainDetails />} />
        <Route path="/releases" element={<ContainReleases />} />
        <Route path="/popular" element={<ContainPopular />} />
        <Route path="/favorites" element={<ContainFavorites />} />
        <Route path="/search" element={<ContaineSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
