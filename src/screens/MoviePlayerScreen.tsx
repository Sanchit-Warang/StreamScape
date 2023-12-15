//custom components
import VideoPlayer from '../components/VideoPlayer'
// import BackDrop from '../components/BackDrop'

//librarycomponents
import { Image, Spinner } from '@nextui-org/react'

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
    `${import.meta.env.VITE_TMDB_API_URL}/3/movie/${id}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )

  return (
    <>
      <VideoPlayer
        videoUrl={`${import.meta.env.VITE_VIDEO_SRC}/embed/movie/${id}`}
      />

      {movie ? (
        <>
          {/* <BackDrop image={movie?.backdrop_path} /> */}
          <div className="grid md:grid-cols-4 xs:grid-cols-4 gap-12 mt-[20vh] mx-7">
            <div className="col-span-1">
              <Image
                isBlurred
                isZoomed
                src={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/t/p/original/${
                  movie.poster_path
                }`}
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
              <br />
              <p>{movie.adult ? 'True' : 'False'}</p>
            </div>
          </div>
        </>
      ) : (
        <center>
          <Spinner />
        </center>
      )}
    </>
  )
}

export default MoviePlayerScreen
