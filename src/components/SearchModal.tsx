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
  RadioGroup,
  Radio,
} from '@nextui-org/react'

import { SearchIcon } from './SearchIcon'

// import { Link } from 'react-router-dom'

import { useState } from 'react'

import SeachListItem from './SeachListItem'

//custom hooks
import useGetData from '../hooks/useGetData'
import { MediaData, Movie, TVShow } from '../types/types'

type Props = {
  isOpen: boolean
  onOpenChange: () => void
  mode: 'light' | 'dark'
}

const SearchModal = ({ isOpen, onOpenChange, mode }: Props) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [tyype, setTyype] = useState('movie')

  const { data: searchMovieData, isLoading } = useGetData<
    MediaData<Movie | TVShow>
  >(
    ['search results', searchQuery, tyype],
    `${import.meta.env.VITE_TMDB_API_URL}/3/search/${tyype}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&query=${searchQuery}`
  )

  const handleClickListItem = (id: number): void => {
    setSearchQuery('')
    navigate(`/${tyype == 'tv' ? 'tvshow' : tyype}/${id}`)
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
              <RadioGroup
                label="Select Type"
                orientation="horizontal"
                defaultValue={tyype}
                onValueChange={(e) => {
                  setTyype(e)
                }}
              >
                <Radio value="movie">Movies</Radio>
                <Radio value="tv">TV shows</Radio>
              </RadioGroup>
              <Input
                type="text"
                label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                color={tyype == 'tv' ? 'primary' : 'secondary'}
                startContent={<SearchIcon />}
              />
            </ModalHeader>
            <ModalBody>
              {isLoading ? (
                <Spinner />
              ) : (
                <Listbox>
                  {searchMovieData?.results.map((entry: Movie | TVShow) => {
                    return (
                      <ListboxItem
                        onPress={onClose}
                        onClick={() => handleClickListItem(entry.id)}
                        key={entry.id}
                        className="h-[10vh] overflow-visible"
                      >
                        <SeachListItem entry={entry} />
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
