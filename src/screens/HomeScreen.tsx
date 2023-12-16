import PopularMoviesOrTVShows from '../components/PopularMoviesOrTVShows'
import { Divider } from "@nextui-org/react"
const HomeScreen = () => {
  return (
    <>
      <h1 className="text-center text-2xl my-2 italic"> Popular Movies </h1>
      <PopularMoviesOrTVShows theme='movies'/>
      <Divider/>
      <h1 className="text-center text-2xl my-2 italic"> Popular TV Shows </h1>
      <PopularMoviesOrTVShows theme='tvshows'/>
    </>
  )
}

export default HomeScreen