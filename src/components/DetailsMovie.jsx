import React from 'react'
import useMovies from '../hooks/useMovies'

export default function DetailsMovie() {
  const {info, getMovieId} = useMovies();
  
  return (
    <div>DetailsMovie</div>
  )
}
