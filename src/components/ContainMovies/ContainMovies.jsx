import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import CardMovie from "../CardMovie/CardMovie";
import { Flex, Heading } from "@chakra-ui/react";
import BottomPagination from "../Pagination/BottomPagination";
import Footer from "../Footer/Footer";

export default function ContainMoviesView({title, category}) {
  const { 
    info,
    page, 
    currentPage, 
    handlePageChange,
    totalPage, 
    getMovies
  } = useMovies();

  useEffect(() => {
    getMovies(page, category);
  }, [page, category]);

  return (
    <>
      <Heading textAlign="center">{title}</Heading>
      <Flex flexWrap="wrap" justifyContent="center" minH="78vh">
        {info.map((movie) => (
          <CardMovie
            key={movie.id}
            id={movie.id}
            name={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </Flex>
      <BottomPagination
        currentPage={currentPage}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
        page={page}
      />
      <Footer position="relative" bottom="0" />
    </>
  );
}
