//custom components
import VideoPlayer from '../components/VideoPlayer'

//library
import { useParams } from 'react-router-dom'

const MoviePlayerScreen = () => {
  const { id } = useParams()
  return <VideoPlayer videoUrl={`https://vidsrc.to/embed/movie/${id}`} />
}

export default MoviePlayerScreen
