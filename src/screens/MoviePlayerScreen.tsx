//custom components
import VideoPlayer from '../components/VideoPlayer'
// import BackDrop from '../components/BackDrop'

//librarycomponents
import { Image } from '@nextui-org/react'

//custom hooks
import useGetData from '../hooks/useGetData'

//library
import { useParams } from 'react-router-dom'
import { SingleMovie } from '../types/types'

const MoviePlayerScreen = () => {
  const { id } = useParams()

  const {
    data: movie,
    // isLoading,
    // isError,
  } = useGetData<SingleMovie>(
    ['movie', id],
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )

  return (
    <>
      <VideoPlayer videoUrl={`https://vidsrc.to/embed/movie/${id}`} />

      {movie && (
        <>
          {/* <BackDrop image={movie?.backdrop_path} /> */}
          <div className="grid md:grid-cols-4 xs:grid-cols-4 gap-12 mt-[20vh] mx-7">
            <div className="col-span-1">
              <Image
                isBlurred
                isZoomed
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="w-full"
              />
            </div>
            <div className="md:col-span-2 xs:col-span-2">
              <p>{movie.title}</p>
              <br />
              <p>{movie.overview}</p>
              <br />
              <p>{movie.release_date}</p>
              <br />
              <p>{movie.budget}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MoviePlayerScreen
