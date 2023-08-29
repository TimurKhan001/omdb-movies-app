import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FavoritesDisplay from './compoments/Favorites/FavoritesDisplay'
import MovieDetail from './compoments/MovieDetail/MovieDetailContainer'
import MovieSearchContainer from './compoments/MovieSearch/MovieSearchContainer'
import Navigation from './compoments/Navigation'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MovieSearchContainer />} />
        <Route path="/detail/:movieId" element={<MovieDetail />} />
        <Route path="/favorites" element={<FavoritesDisplay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
