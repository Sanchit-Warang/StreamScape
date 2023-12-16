// import { MouseEventHandler } from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  // NavbarItem,
  // Link,
  Button,
  useDisclosure,
} from '@nextui-org/react'

import { NavLink } from 'react-router-dom'

//custom components
import AcmeLogo from './Acmelogo'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'
import { SearchIcon } from './SearchIcon'
import SearchModal from './SearchModal'

type Props = {
  mode: 'light' | 'dark'
  toggleTheme: () => void
}

const Navigation = ({ mode, toggleTheme }: Props) => {
  //For Search Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handleTheme = (): void => {
    toggleTheme()
  }

  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavLink to="/home">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">StreamScape</p>
          </NavbarBrand>
        </NavLink>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          {/* <Input
            isReadOnly
            as={Button}
            color="secondary"
            type="email"
            placeholder="search"
            className="w-40"
            onPress={onOpen}
            endContent={<SearchIcon />}
          /> */}
          <Button onPress={onOpen} variant="flat" color="secondary">
            <SearchIcon />
            Search
          </Button>
          <Button isIconOnly variant="light" onClick={handleTheme}>
            {mode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </NavbarContent>
      </Navbar>
      <SearchModal isOpen={isOpen} onOpenChange={onOpenChange} mode={mode} />
    </>
  )
}

export default Navigation
