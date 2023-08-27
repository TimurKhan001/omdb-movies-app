import React, { forwardRef } from 'react'

import type { MovieResponse } from '../../store/slices/movieSlice'
import Spinner from '../Spinner'

import MovieGrid from './MoviewGrid'

type MovieSearchDisplayProps = {
  handleSearchClick: () => void
  isLoading: boolean
  isError: boolean
  movies?: MovieResponse
}

const MovieSearchDisplay = forwardRef<
  HTMLInputElement,
  MovieSearchDisplayProps
>(({ handleSearchClick, isLoading, isError, movies }, ref) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    handleSearchClick()
  }

  return (
    <div className="space-y-2 p-6">
      <label htmlFor="searchTerm" className="block text-gray-500 text-sm">
        Search for a movie:
      </label>
      <form onSubmit={handleFormSubmit} className="flex">
        <input
          ref={ref}
          className="mr-4 px-2 py-1 border rounded"
          type="text"
          id="searchTerm"
          placeholder="Enter movie title"
        />
        <button
          className="py-1 px-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Search
        </button>
      </form>
      {isLoading && <Spinner />}
      {isError && <p>Error fetching data.</p>}
      {movies && movies.Search && <MovieGrid movies={movies.Search} />}
    </div>
  )
})

export default MovieSearchDisplay
