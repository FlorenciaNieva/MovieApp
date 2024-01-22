import React, { useEffect } from "react";
import useMovies from "../hooks/useMovies";
import CardMovie from "./CardMovie";
import { Flex, Heading } from "@chakra-ui/react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function ContainPopular() {
  const { info, getPopular } = useMovies();

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <Heading textAlign="center">Popular Movies</Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {info.map((movie) => (
          <CardMovie
            id={movie.id}
            name={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </Flex>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
        current={}
        total={}
        pageSize={20}
        onChange={}
      />
    </>
  );
}
