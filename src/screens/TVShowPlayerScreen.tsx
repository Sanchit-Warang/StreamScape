//custom components
import VideoPlayer from '../components/VideoPlayer'
// import BackDrop from '../components/BackDrop'

//librarycomponents
import { Image, Spinner } from '@nextui-org/react'

//custom hooks
import useGetData from '../hooks/useGetData'

//library
import { useParams } from 'react-router-dom'
import { SingleTVShow } from '../types/types'

const TVShowPlayerScreen = () => {
  const { id } = useParams()

  const {
    data: tvshow,
    // isLoading,
    // isError,
  } = useGetData<SingleTVShow>(
    ['tvshow', id],
    `https://api.themoviedb.org/3/tv/${id}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )

  return (
    <>
      <VideoPlayer videoUrl={`https://vidsrc.to/embed/tv/${id}`} />

      {tvshow ? (
        <>
          {/* <BackDrop image={tvshow?.backdrop_path} /> */}
          <div className="grid md:grid-cols-4 xs:grid-cols-4 gap-12 mt-[20vh] mx-7">
            <div className="col-span-1">
              <Image
                isBlurred
                isZoomed
                src={`https://image.tmdb.org/t/p/original/${tvshow.poster_path}`}
                className="w-full"
              />
            </div>
            <div className="md:col-span-2 xs:col-span-2">
              <p>{tvshow.title}</p>
              <br />
              <p>{tvshow.overview}</p>
              <br />
              <p>{tvshow.release_date}</p>
              <br />
              {/* <p>{tvshow.budget}</p> */}
              <br />
              <p>{tvshow.adult ? 'True': 'False'}</p>
            </div>
          </div>
        </>
      ):(<center><Spinner/></center>)}
    </>
  )
}

export default TVShowPlayerScreen
