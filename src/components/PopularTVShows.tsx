//custom components
import TVShowCard from './TVShowCard'

//custom hooks
import useGetData from '../hooks/useGetData'
import useGetTotalPages from '../hooks/useGetTotalPages'

//library components
import { CircularProgress } from '@nextui-org/react'
import { Pagination } from '@nextui-org/react'

//library
import { useState } from 'react'
//types
import type { TVShow, MediaData } from '../types/types'

const PopularTVShows = () => {
  const [page, setPage] = useState<number>(1)

  const {
    data: tvshowData,
    isLoading,
    isError,
  } = useGetData<MediaData<TVShow>>(
    ['popularTVShows', page],
    `https://api.themoviedb.org/3/tv/popular?page=${page}&api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )

  const {
    data: totalPages,
  } = useGetTotalPages<number>(
    ['popularTVShows','totalPages'],
    `https://api.themoviedb.org/3/tv/popular?api_key=${
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
          {tvshowData?.results.map((tvshow: TVShow) => (
            <TVShowCard key={tvshow.id} tvshow={tvshow} />
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

export default PopularTVShows
