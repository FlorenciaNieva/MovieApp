import { useEffect, useState } from "react";
import useMovies from "../../hooks/useMovies";
import CardMovie from "../CardMovie/CardMovie";
import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import BottomPagination from "../Pagination/BottomPagination";
import Footer from "../Footer/Footer";

export default function ContainMovies({ title, category }) {
  const { info, page, currentPage, handlePageChange, totalPage, getMovies } =
    useMovies();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await getMovies(page, category);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, category]);

  if (isLoading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="#ff2323" />
      </Flex>
    );
  }

  return (
    <Box>
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
    </Box>
  );
}
