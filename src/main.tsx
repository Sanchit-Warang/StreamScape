import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


//screens
import HomeScreen from './screens/HomeScreen'
import MoviePlayerScreen from './screens/MoviePlayerScreen'
import TVShowPlayerScreen from './screens/TVShowPlayerScreen.tsx'

import { Analytics } from '@vercel/analytics/react'


const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/movie/:id" element={<MoviePlayerScreen />} />
      <Route path="/tvshow/:id" element={<TVShowPlayerScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </NextUIProvider>
    </QueryClientProvider>
    <Analytics/>
  </React.StrictMode>
)
