//custom components
import MovieCard from './MovieCard'

//custom hooks
import useGetData from '../hooks/useGetData'

//library components
import { CircularProgress } from '@nextui-org/react'
import { Pagination } from '@nextui-org/react'

//library
import { useState } from 'react'
//types
import type { Movie, MovieData } from '../types/types'

const PopularMovies = () => {
  const [page, setPage] = useState<number>(1)

  const {
    data: movieData,
    isLoading,
    isError,
  } = useGetData<MovieData>(
    ['popularMovies', page],
    `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )

  const handlepageChange = (page: number): void => {
    setPage(page)
  }

  return (
    <>
      {isLoading ? (
        <CircularProgress
          className="mx-auto my-auto h-[90vh]"
          classNames={{
            svg: 'w-[4rem] h-[4rem]',
          }}
          size="lg"
          aria-label="Loading..."
        />
      ) : isError ? (
        'Error fetching data'
      ) : (
        <div className="grid mx-10 gap-6 md:grid-cols-7 xs:grid-cols-4">
          {movieData?.results.map((movie: Movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      )}
      {movieData && (
        <div>
          <center>
            <Pagination
              className="mx-auto my-5"
              loop
              showShadow
              boundaries={0}
              siblings={4}
              onChange={(page: number): void => handlepageChange(page)}
              total={movieData?.total_pages}
              initialPage={page}
            />
          </center>
        </div>
      )}
    </>
  )
}

export default PopularMovies
