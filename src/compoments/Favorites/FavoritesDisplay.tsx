// Favorites.tsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeFavorite } from '../../store/slices/favoritesSlice'
import type { RootState } from '../../store/store'
import MovieCard from '../MovieCard'
import MovieGrid from '../MovieGrid'

const FavoritesDisplay: React.FC = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.favorites)

  const handleRemoveFromFavorites = (id: string) => {
    dispatch(removeFavorite(id))
  }

  if (favorites.length === 0) {
    return <h3 className="text-center my-4">Nothing here</h3>
  }

  return (
    <MovieGrid>
      {favorites.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster}
          title={movie.title}
          handleRemove={handleRemoveFromFavorites}
        />
      ))}
    </MovieGrid>
  )
}

export default FavoritesDisplay
