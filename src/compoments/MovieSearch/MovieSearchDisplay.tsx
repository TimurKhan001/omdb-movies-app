import React, { forwardRef } from 'react'

import type { MovieResponse } from '../../store/slices/movieSlice'
import MovieCard from '../MovieCard'
import MovieGrid from '../MovieGrid'
import Spinner from '../Spinner'

type MovieSearchDisplayProps = {
  handleSearchClick: () => void
  isLoading: boolean
  error: string
  movies?: Partial<MovieResponse>
  inputValue?: string
  totalResults?: string | undefined
}

const MovieSearchDisplay = forwardRef<
  HTMLInputElement,
  MovieSearchDisplayProps
>(
  (
    { handleSearchClick, isLoading, error, movies, inputValue, totalResults },
    ref,
  ) => {
    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      handleSearchClick()
    }

    return (
      <div className="space-y-2 p-6 dark:text-gray-300">
        <label
          htmlFor="searchTerm"
          className="block text-gray-500 dark:text-gray-400 text-sm"
        >
          Search for a movie:
        </label>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
        >
          <input
            defaultValue={inputValue}
            ref={ref}
            className="px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            type="text"
            id="searchTerm"
            placeholder="Enter movie title"
            pattern=".{3,}" // This regex means "match any character, a minimum of 2 times, and no upper limit."
            title="Please enter at least 3 characters."
          />
          <button
            className="py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-red-500 dark:hover:bg-red-600"
            type="submit"
          >
            Search
          </button>
        </form>
        {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
        {totalResults && (
          <h2 className="text-right text-gray-600 dark:text-gray-400 font-semibold">
            Found {totalResults} results
          </h2>
        )}

        {movies && 'Search' in movies && movies.Search && (
          <MovieGrid>
            {movies.Search.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
              />
            ))}
          </MovieGrid>
        )}

        {isLoading && <Spinner />}
      </div>
    )
  },
)

export default MovieSearchDisplay
