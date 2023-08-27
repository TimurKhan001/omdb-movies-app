import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { MovieResponse } from './movieSlice'

const apiKey = import.meta.env.VITE_API_KEY

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://omdbapi.com/' }),
  endpoints: (builder) => ({
    getMoviesBySearch: builder.query<MovieResponse, string>({
      query: (searchQuery) => `?apikey=${apiKey}&s=${searchQuery}`,
    }),
  }),
  reducerPath: 'movieApi',
})

export const { useGetMoviesBySearchQuery } = movieApi
