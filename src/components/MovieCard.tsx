import { Card, CardBody, Image, CardFooter, Link } from '@nextui-org/react'

//types
import type { Movie } from '../types/types'

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`https://vidsrc.to/embed/movie/${movie.id}`}>
      <Card isPressable shadow="md" className="w-[100%] h-[300px] hover:bg-primary ">
        <CardBody className="overflow-visible p-0">
          <Image
            isZoomed
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
          {/* <p className="text-default-500">{movie.type}</p> */}
        </CardFooter>
      </Card>
    </Link>
  )
}
