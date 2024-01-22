import { useEffect } from 'react'
import useMovies from '../hooks/useMovies'

export default function ContainPopular() {
  const {info, getPopular} = useMovies();

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>ContainPopular</div>
  )
}
