import { Avatar, Chip } from '@nextui-org/react'
import { Movie, TVShow } from '../types/types'
type Props = {
  entry: Movie | TVShow
}

const SeachListItem = ({ entry }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      {/* <Badge content={movie.vote_average} color='primary'> */}
      <Avatar
        className="h-[8vh] w-[10%]"
        radius="sm"
        src={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/t/p/w200/${
          entry.poster_path
        }`}
      />
      {/* </Badge> */}
      <div className="flex gap-2 items-center w-[85%] whitespace-wrap">
        <p className="truncate">
          {'title' in entry ? entry.title : entry.name}
        </p>
        <Chip
          color={'name' in entry ? 'primary' : 'secondary'}
          variant="shadow"
        >
          {'release_date' in entry
            ? entry.release_date.substring(0, 4)
            : entry.first_air_date.substring(0, 4)}
        </Chip>
        {/* <Chip color='primary' variant='bordered'>
            {movie.vote_average}
        </Chip> */}
      </div>
    </div>
  )
}

export default SeachListItem
