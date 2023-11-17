import { Card, CardBody, Image, CardFooter, Badge} from '@nextui-org/react'
import {Link} from 'react-router-dom'

//types
import type { TVShow } from '../types/types'

export default function TVShowCard({ tvshow }: { tvshow: TVShow }) {
  return (
    <Link to={`/tvshow/${tvshow.id}`}>
      <Card shadow="md" fullWidth={true} className="h-[300px] hover:bg-primary overflow-visible">
      <Badge content={tvshow.vote_average.toFixed(1)} size='lg' placement='top-right' color="secondary">
        <CardBody className="overflow-visible p-0">
          <Image
            isZoomed
            isBlurred
            shadow="sm"
            radius="lg"
            width="100%"
            className="w-full object-cover h-[250px]"
            src={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
          />
        </CardBody>
        </Badge>
        <CardFooter className="justify-center">
          <p className='truncate'>
            <b>{tvshow.name}</b>
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
