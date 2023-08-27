import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { MovieResponse, Movie } from './movieSlice'

const apiKey = import.meta.env.VITE_API_KEY

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://omdbapi.com/' }),
  endpoints: (builder) => ({
    getMovieById: builder.query<Movie, string>({
      query: (movieId) => `?apikey=${apiKey}&i=${movieId}`,
    }),
    getMoviesBySearch: builder.query<
      MovieResponse,
      { searchTerm: string; page: number }
    >({
      query: ({ searchTerm, page }) =>
        `?apikey=${apiKey}&s=${searchTerm}&page=${page}`,
    }),
  }),
  reducerPath: 'movieApi',
})

export const { useGetMoviesBySearchQuery, useGetMovieByIdQuery } = movieApi
