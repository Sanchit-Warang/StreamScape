import { useNavigate } from 'react-router-dom'
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

import { SearchIcon } from './SearchIcon'

// import { Link } from 'react-router-dom'

import { useState } from 'react'

import SeachListItem from './SeachListItem'

//custom hooks
import useGetData from '../hooks/useGetData'
import { MovieData, Movie } from '../types/types'

type Props = {
  isOpen: boolean
  onOpenChange: () => void
  mode: 'light' | 'dark'
}

const SearchModal = ({ isOpen, onOpenChange, mode }: Props) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const { data: searchMovieData, isLoading } = useGetData<MovieData>(
    ['search results', searchQuery],
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&query=${searchQuery}`
  )

  const handleClickListItem = (id: number): void => {
    setSearchQuery('')
    navigate(`/movie/${id}`)
  }

  return (
    <Modal
      isOpen={isOpen}
      size="lg"
      backdrop={'blur'}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
    >
      <ModalContent className={`${mode} text-foreground bg-background`}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 mr-4">
              <Input
                type="text"
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                color="secondary"
                startContent={<SearchIcon />}
              />
            </ModalHeader>
            <ModalBody>
              {isLoading ? (
                <Spinner />
              ) : (
                <Listbox>
                  {searchMovieData?.results.map((movie: Movie) => {
                    return (
                      <ListboxItem
                        onPress={onClose}
                        onClick={() => handleClickListItem(movie.id)}
                        key={movie.id}
                        className="h-[10vh] overflow-visible"
                      >
                        <SeachListItem movie={movie}/>
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
