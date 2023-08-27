import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Favorites from './compoments/main/Favorites'
import MovieDetail from './compoments/main/MovieDetail'
import MovieSearchContainer from './compoments/MovieSearch/MovieSearchContainer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieSearchContainer />} />
        <Route path="/detail/:movieId" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
