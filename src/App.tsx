//custom components
import MovieCard from './components/MovieCard'
import Navigation from './components/Navigation'

//custom hooks
import useGetData  from './hooks/useGetData'

//library components
import { CircularProgress } from '@nextui-org/react'

//library

//types
import type { Movie, MovieData } from './types/types'

export default function App() {

  const { data:movieData, isLoading, isError } = useGetData<MovieData>(['popularMovies'], `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)

  return (
    <>
      <Navigation />
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
    </>
  )
}
