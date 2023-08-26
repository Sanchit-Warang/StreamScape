import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  // NavbarItem,
  // Link,
  Button,
} from '@nextui-org/react'

//custom components
import AcmeLogo from './Acmelogo'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'

type Props = {
  mode: 'light' | 'dark'
  toggleTheme: () => void
}

const Navigation = ({ mode, toggleTheme }: Props) => {
  const handleTheme = (): void => {
    toggleTheme()
  }
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <Button
          isIconOnly
          variant="light"
          onClick={(): void => {
            handleTheme()
          }}
        >
          {mode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation
