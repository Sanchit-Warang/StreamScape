import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Spinner,
  Listbox,
  ListboxItem,
} from '@nextui-org/react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

//custom hooks
import useGetData from '../hooks/useGetData'
import { MovieData, Movie } from '../types/types'

type Props = {
  isOpen: boolean
  onOpenChange: () => void
  mode: 'light' | 'dark'
}

const SearchModal = ({ isOpen, onOpenChange, mode }: Props) => {
  const [searchQuery, setSearchQuery] = useState('')

  const { data: searchMovieData, isLoading } = useGetData<MovieData>(
    ['search results', searchQuery],
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&query=${searchQuery}`
  )

  return (
    <Modal
      isOpen={isOpen}
      backdrop={'blur'}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
    >
      <ModalContent className={`${mode} text-foreground bg-background`}>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 mr-4">
              <Input
                type="text"
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                color="secondary"
              />
            </ModalHeader>
            <ModalBody>
              {isLoading ? (
                <Spinner />
              ) : (
                <Listbox>
                  {searchMovieData?.results.map((movie: Movie) => {
                    return (
                      <ListboxItem key={movie.id} className="h-10">
                        <Link key={movie.id} to={`/movie/${movie.id}`}>
                          {movie.title} ({movie.release_date})
                        </Link>
                      </ListboxItem>
                    )
                  })}
                </Listbox>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default SearchModal
