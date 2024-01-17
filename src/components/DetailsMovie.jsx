import React from 'react'
import useMovies from '../hooks/useMovies'
import { useParams } from 'react-router';

export default function DetailsMovie() {
  const {info, getMovieId} = useMovies();
  const params = useParams();

  return (
    <div>DetailsMovie</div>
  )
}
