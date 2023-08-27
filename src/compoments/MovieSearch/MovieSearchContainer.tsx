import React, { useState, useRef } from 'react'

import { useGetMoviesBySearchQuery } from '../../store/slices/movieApi'

import MovieSearchDisplay from './MovieSearchDisplay'

const MovieSearchContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  const {
    data: movies,
    isLoading,
    isError,
  } = useGetMoviesBySearchQuery(searchTerm, {
    skip: !searchTerm,
  })

  const handleSearchClick = () => {
    if (!inputRef.current) {
      return
    }
    setSearchTerm(inputRef.current.value)
  }

  return (
    <MovieSearchDisplay
      ref={inputRef}
      handleSearchClick={handleSearchClick}
      isLoading={isLoading}
      isError={isError}
      movies={movies}
    />
  )
}

export default MovieSearchContainer
