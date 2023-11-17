import PopularMovies from "../components/PopularMovies"
import PopularTVShows from "../components/PopularTVShows"
import { Divider } from "@nextui-org/react"
const HomeScreen = () => {
  return (
    <>
      <h1 className="text-center text-2xl my-2 italic"> Popular Movies </h1>
      <PopularMovies/>
      <Divider/>
      <h1 className="text-center text-2xl my-2 italic"> Popular TV Shows </h1>
      <PopularTVShows/>
    </>
  )
}

export default HomeScreen