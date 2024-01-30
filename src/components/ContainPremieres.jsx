import { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import CardMovie from "./CardMovie";
import { Flex, Heading } from "@chakra-ui/react";
import BottomPagination from "./BottomPagination";
import Footer from "./Footer";

export default function ContainPremieres() {
  const { info, page, currentPage, handlePageChange, totalPage, getNewMovies } = useMovies();

  useEffect(() => {
    getNewMovies(page);
  }, [page]);

  return (
    <>
      <Heading textAlign="center">Premieres Movies</Heading>
      <Flex flexWrap="wrap" justifyContent="center" minH="78vh">
        {info.map((movie) => (
          <CardMovie
            id={movie.id}
            name={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </Flex>
      <BottomPagination currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} page={page} />
      <Footer position="relative" bottom="0" />
    </>
  );
}
