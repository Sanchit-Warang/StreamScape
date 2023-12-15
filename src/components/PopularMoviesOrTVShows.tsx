//custom components
import MovieOrTVShowCard from './MovieOrTVShowCard'

//custom hooks
import useGetData from '../hooks/useGetData'
import useGetTotalPages from '../hooks/useGetTotalPages'

//library components
import { CircularProgress } from '@nextui-org/react'
import { Pagination } from '@nextui-org/react'

//library
import { useState } from 'react'
//types
import type { Movie, TVShow, MediaData } from '../types/types'

type Props = {
  theme: 'movies' | 'tvshows'
}

const PopularMoviesOrTVShows = ({ theme }: Props) => {
  const [page, setPage] = useState<number>(1)

  const { data, isLoading, isError } = useGetData<MediaData<Movie|TVShow>>(
    ['popular', theme, page],
    `${import.meta.env.VITE_TMDB_API_URL}/3/${theme === 'movies'? 'movie': 'tv'}/popular?page=${page}&api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )

  const { data: totalPages } = useGetTotalPages<number>(
    ['popular', theme ,'totalPages'],
    `${import.meta.env.VITE_TMDB_API_URL}/3/${theme === 'movies'? 'movie': 'tv'}/popular?api_key=${
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
        <div className="grid mx-10 gap-6  sm:grid-cols-2 md:grid-cols-7">
          {data?.results.map((entry: Movie | TVShow) => (
            <MovieOrTVShowCard key={entry.id} data={entry} />
          ))}
        </div>
      )}
      {totalPages && (
        <div>
          <center>
            <Pagination
              className="mx-auto my-5"
              loop
              showShadow
              boundaries={0}
              siblings={4}
              onChange={(page: number): void => handlepageChange(page)}
              total={totalPages}
              initialPage={page}
            />
          </center>
        </div>
      )}
    </>
  )
}

export default PopularMoviesOrTVShows
