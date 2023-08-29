import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as FavoriteIcon } from '../../assets/favorite.svg'
import { addFavorite } from '../../store/slices/favoritesSlice'
import type { Movie } from '../../store/slices/movieSlice'
import type { RootState } from '../../store/store'
import Button from '../misc/Button'
import Spinner from '../misc/Spinner'

type MovieDetailDisplayProps = {
  movieDetail?: Movie
  isLoading: boolean
  isError: boolean
  missingId: boolean
}

const MovieDetailDisplay: React.FC<MovieDetailDisplayProps> = ({
  movieDetail,
  isLoading,
  isError,
  missingId,
}) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.favorites)

  const handleAddToFavorites = () => {
    if (movieDetail) {
      const movieBrief = {
        id: movieDetail.imdbID,
        poster: movieDetail.Poster,
        title: movieDetail.Title,
      }
      dispatch(addFavorite(movieBrief))
    }
  }

  if (missingId) {
    return (
      <div className="text-red-500 text-lg font-semibold p-4">
        Error: No Movie ID provided!
      </div>
    )
  }
  if (isLoading) return <Spinner />
  if (isError || !movieDetail) {
    return (
      <p className="text-red-500 text-lg font-semibold p-4">
        Error fetching movie details.
      </p>
    )
  }

  const isFavorite = favorites.some((fav) => fav.id === movieDetail?.imdbID)

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg flex flex-col md:flex-row">
      <img
        className="w-full md:w-1/2 h-82 object-cover rounded-md mb-8 md:mb-0 md:mr-4"
        src={movieDetail.Poster}
        alt={movieDetail.Title}
      />
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-center">
          {!isFavorite ? (
            <Button
              text="Add to Favorites"
              handleClick={handleAddToFavorites}
            />
          ) : (
            <FavoriteIcon className="w-10 h-10 md:ml-4 mb-4 dark:fill-white" />
          )}
          <span className="text-xl font-semibold">{movieDetail.Year}</span>
        </div>
        <div className="space-y-2 md:p-4">
          <h1 className="text-3xl font-bold">{movieDetail.Title}</h1>
          <p className="text-lg">
            <span className="font-semibold">Genre:</span> {movieDetail.Genre}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Country:</span>{' '}
            {movieDetail.Country}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Director:</span>{' '}
            {movieDetail.Director}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Plot:</span> {movieDetail.Plot}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Actors:</span> {movieDetail.Actors}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Rating:</span>{' '}
            {movieDetail.imdbRating}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailDisplay
