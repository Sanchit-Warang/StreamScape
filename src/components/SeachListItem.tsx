import { Avatar, Chip} from '@nextui-org/react'
import { Movie } from '../types/types'
type Props = {
  movie: Movie
}

const SeachListItem = ({ movie }: Props) => {
  return (
    <div className="flex gap-2 items-center overflow-visible">
      {/* <Badge content={movie.vote_average} color='primary'> */}
        <Avatar
          className="basis-1/7 h-[8vh] width-[8vh]"
          radius="sm"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        />
      {/* </Badge> */}
      <div className="flex gap-2 items-center basis-6/7 whitespace-wrap">
        <p className="truncate">{movie.title}</p>
        <Chip color="secondary" variant="shadow">
          {movie.release_date.substring(0, 4)}
        </Chip>
        {/* <Chip color='primary' variant='bordered'>
            {movie.vote_average}
        </Chip> */}
      </div>
    </div>
  )
}

export default SeachListItem
