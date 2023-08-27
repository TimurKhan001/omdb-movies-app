import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FavoritesDisplay from './compoments/Favorites/FavoritesDisplay'
import MovieDetail from './compoments/MovieDetail/MovieDetailContainer'
import MovieSearchContainer from './compoments/MovieSearch/MovieSearchContainer'
import Navigation from './compoments/Navigation'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <BrowserRouter>
      <Navigation toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      <Routes>
        <Route path="/" element={<MovieSearchContainer />} />
        <Route path="/detail/:movieId" element={<MovieDetail />} />
        <Route path="/favorites" element={<FavoritesDisplay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
