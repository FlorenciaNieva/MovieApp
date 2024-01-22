import { useState } from "react";
import axios from "axios";

const useMovies = () => {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [trailer, setTrailer] = useState(null);
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  const getPopular = (page) => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
      .then((response) => {
        setInfo(response.data.results);
        setTotalPage(response.data.total_results);
        setCurrentPage(response.data.page);
      })
      .catch((error) => console.error(error));
  };

  const getNewMovies = (page) => {
    axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`)
      .then((response) => {
        setInfo(response.data.results);
        setTotalPage(response.data.total_results);
        setCurrentPage(response.data.page);
      })
      .catch((error) => console.error(error));
  };

  const handlePageChange = (newPage) =>{
    setPage(newPage);
  };

  const getTopRated = () => {
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const getMovieId = (id) => {
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => console.error(error));
  }

  const getVideo = (id) => {
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`)
      .then((response) => {
        const videos = response.data.videos.results;
        const videoOfficial = videos.find(
          (video) => video.name === "Official Trailer"
        );
        setTrailer(
          videoOfficial ? videoOfficial : response.data.videos.results[0]
        );
      })
      .catch((error) => console.error(error));
  };

  const searchMovie = (movie) => {
    axios(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${apiKey}`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  return {
    info,
    page,
    currentPage,
    totalPage,
    handlePageChange,
    getPopular,
    getNewMovies,
    getTopRated,
    getMovieId,
    trailer,
    getVideo,
    searchMovie,
  };
};

export default useMovies;

