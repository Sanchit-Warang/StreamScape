//custom components
import Navigation from './components/Navigation'

//custom hooks

//library components
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

//library

//types

const getDefaultTheme = (): 'light' | 'dark' => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'light'
  }
}

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>(getDefaultTheme())

  const toggleTheme = (): void => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className={`${mode} text-foreground bg-background`}>
      <Navigation mode={mode} toggleTheme={toggleTheme} />
      <Outlet />
    </main>
  )
}
