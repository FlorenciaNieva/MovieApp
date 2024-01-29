import { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import CardMovie from "./CardMovie";
import { Flex, Heading } from "@chakra-ui/react";
import BottomPagination from "./BottomPagination";
import Footer from "./Footer";

export default function ContainPopular() {
  const { info, page, currentPage, handlePageChange, totalPage, getPopular } = useMovies();

  useEffect(() => {
    getPopular(page);
  }, [page]);

  return (
    <>
      <Heading textAlign="center">Popular Movies</Heading>
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
