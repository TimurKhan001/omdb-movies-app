import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGetMoviesBySearchQuery } from '../../store/slices/movieApi'
import {
  setSearchResults,
  clearSearchResults,
  setSearchTerm,
  setCurrentPage,
  setLastFetchedPage,
} from '../../store/slices/searchResultsSlice'
import type { RootState } from '../../store/store'

import MovieSearchDisplay from './MovieSearchDisplay'

const MovieSearchContainer: React.FC = () => {
  const fetching = useRef(false)
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const currentPage = useSelector(
    (state: RootState) => state.searchResults.currentPage,
  )
  const lastFetchedPage = useSelector(
    (state: RootState) => state.searchResults.lastFetchedPage,
  )
  const searchResults = useSelector(
    (state: RootState) => state.searchResults.results,
  )
  const searchTerm = useSelector(
    (state: RootState) => state.searchResults.searchTerm,
  )

  const shouldSkipFetch =
    searchTerm === '' ||
    currentPage <= lastFetchedPage ||
    (currentPage === 1 && searchResults.length > 0)

  const { data: movies, isLoading } = useGetMoviesBySearchQuery(
    {
      page: currentPage,
      searchTerm: searchTerm,
    },
    {
      skip: !!shouldSkipFetch,
    },
  )

  useEffect(() => {
    if (movies && 'Search' in movies && movies.Search) {
      const combinedMovies = [...searchResults, ...movies.Search]
      dispatch(setSearchResults(combinedMovies))
      dispatch(setLastFetchedPage(currentPage))
    }
  }, [movies])

  useEffect(() => {
    const isFullPage =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight

    if (!isFullPage && !isLoading) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }, [searchResults, isLoading])

  const handleSearchClick = () => {
    if (!inputRef.current) return

    const term = inputRef.current.value

    if (term !== searchTerm) {
      dispatch(clearSearchResults())
      dispatch(setSearchTerm(term))
      dispatch(setCurrentPage(1))
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        fetching.current
      ) {
        return
      }
      dispatch(setCurrentPage(currentPage + 1))
      fetching.current = true
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  useEffect(() => {
    if (movies) {
      fetching.current = false
    }
  }, [movies])

  const displayResults = searchTerm ? searchResults : []

  return (
    <MovieSearchDisplay
      ref={inputRef}
      handleSearchClick={handleSearchClick}
      isLoading={isLoading}
      error={movies && 'Error' in movies && movies.Error}
      movies={{ Search: displayResults }}
      inputValue={searchTerm}
      totalResults={
        movies && 'Search' in movies ? movies.totalResults : undefined
      }
    />
  )
}

export default MovieSearchContainer
