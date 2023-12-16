import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@nextui-org/react'
import useGetData from '../hooks/useGetData'
import type { Movie, TVShow, MediaData } from '../types/types'
import { useNavigate } from 'react-router-dom';
const HeroScreen = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Explore Unlimited Movies and TV Shows
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Dive into the World of Entertainment
        </h3>
        <p className="text-base md:text-lg text-secondary my-4 md:my-6">
          Discover a vast collection of movies and TV shows, from classic films
          to the latest series. Enjoy high-quality streaming anytime, anywhere.
        </p>
        {/* <button className="bg-primary text-white font-medium py-2 px-4 rounded transition-all hover:bg-primary-600 active:scale-95">
          Go to Home
        </button> */}
        {/* <Link
         to={'/home'}> */}
        <Button
          variant="solid"
          color="primary"
          className="hover:bg-primary-600"
          onClick={() => {
            navigate('/home')
          }}
        >
          Go to Home
        </Button>
        {/* </Link> */}

        {/* <Link to='/home'>go</Link> */}
      </div>
      <ShuffleGrid />
    </section>
  )
}

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

let squareData = [
  {
    id: 1,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 2,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 3,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 4,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 5,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 6,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 7,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 8,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 9,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 10,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 11,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 12,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 13,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 14,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 15,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
  {
    id: 16,
    src: 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg',
  },
]

const generateSquares = (squares: typeof squareData) => {
  return shuffle(squares).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full rounded-lg"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
      }}
    ></motion.div>
  ))
}

const ShuffleGrid = () => {
  const { data: movies, isLoading: lmovie } = useGetData<
    MediaData<Movie | TVShow>
  >(
    ['popular', 'movies', 1],
    `${import.meta.env.VITE_TMDB_API_URL}/3/movie/popular?page=1&api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )
  const { data: tvshows, isLoading: ltv } = useGetData<
    MediaData<Movie | TVShow>
  >(
    ['popular', 'tvshows', 1],
    `${import.meta.env.VITE_TMDB_API_URL}/3/tv/popular?page=1&api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  )

  if (movies && tvshows && !lmovie && !ltv) {
    squareData = [
      ...movies.results
        .map((movie) => ({
          id: movie.id,
          src: `${import.meta.env.VITE_TMDB_API_IMAGE_URL}/t/p/w400/${
            movie.poster_path
          }`,
        }))
        .slice(0, 8),
      ...tvshows.results
        .map((tvshow) => ({
          id: tvshow.id,
          src: `${import.meta.env.VITE_TMDB_API_IMAGE_URL}/t/p/w400/${
            tvshow.poster_path
          }`,
        }))
        .slice(0, 8),
    ]
  }

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [squares, setSquares] = useState(generateSquares(squareData))

  useEffect(() => {
    shuffleSquares()

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const shuffleSquares = () => {
    setSquares(generateSquares(squareData))

    timeoutRef.current = setTimeout(shuffleSquares, 2500)
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[78vh] gap-1">
      {squares.map((sq) => sq)}
    </div>
  )
}

export default HeroScreen
