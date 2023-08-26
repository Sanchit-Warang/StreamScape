//custom components
import Navigation from './components/Navigation'
import PopularMovies from './components/PopularMovies'

//custom hooks

//library components
import { useState } from 'react'

//library

//types

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const toggleTheme = (): void => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className={`${mode} text-foreground bg-background`}>
      <Navigation mode={mode} toggleTheme={toggleTheme}/>
      <br />
      <PopularMovies/>
    </main>
  )
}
