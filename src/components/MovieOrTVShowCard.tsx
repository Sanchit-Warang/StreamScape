import { Card, CardBody, Image, CardFooter, Badge } from '@nextui-org/react'
import { Link } from 'react-router-dom'

//types
import type { Movie, TVShow } from '../types/types'

type Props = { data: Movie | TVShow }

export default function MovieOrTVShowCard({ data }: Props) {
  return (
    <Link to={`/${'name' in data ? 'tvshow' : 'movie'}/${data.id}`}>
      <Card
        shadow="md"
        fullWidth={true}
        className="h-[20rem] w-[100%]  hover:bg-primary overflow-visible"
      >
        <Badge
          content={data.vote_average.toFixed(1)}
          size="lg"
          placement="top-right"
          color="secondary"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              isBlurred
              shadow="sm"
              radius="lg"
              width="100%"
              className="object-cover h-[17rem]"
              src={`${import.meta.env.VITE_TMDB_API_IMAGE_URL}/t/p/w500/${
                data.poster_path
              }`}
            />
          </CardBody>
        </Badge>
        <CardFooter className="justify-center">
          <p className="truncate">
            <b>{'name' in data ? data.name : data.title}</b>
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
