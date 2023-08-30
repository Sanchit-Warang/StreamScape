import { Card, CardBody, Image, CardFooter} from '@nextui-org/react'
import {Link} from 'react-router-dom'

//types
import type { Movie } from '../types/types'

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link to={`movie/${movie.id}`}>
      <Card isPressable  shadow="md" fullWidth={true} className="h-[300px] hover:bg-primary">
        <CardBody className="overflow-visible p-0">
          <Image
            isZoomed
            isBlurred
            shadow="sm"
            radius="lg"
            width="100%"
            className="w-full object-cover h-[250px]"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <p>
            <b>{movie.title}</b>
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
