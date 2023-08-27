import { createSlice } from '@reduxjs/toolkit'

import { movieApi } from './movieApi'

type Rating = {
  Source: string
  Value: string
}

export type Movie = {
  Title: string
  Year: string
  Rated?: string
  Released?: string
  Runtime?: string
  Genre?: string
  Director?: string
  Writer?: string
  Actors?: string
  Plot?: string
  Language?: string
  Country?: string
  Awards?: string
  Poster: string
  Ratings?: Rating[]
  Metascore?: string
  imdbRating?: string
  imdbVotes?: string
  imdbID: string
  Type: string
  DVD?: string
  BoxOffice?: string
  Production?: string
  Website?: string
  Response?: string
}

export type MovieResponse =
  | {
      Search: Movie[]
      totalResults: string
      Response: string
    }
  | {
      Response: string
      Error: string
    }

type MovieState = {
  data?: MovieResponse
  loading: boolean
  error?: string
}

const initialState: MovieState = {
  data: undefined,
  error: undefined,
  loading: false,
}

export const isErrorType = (
  response: MovieResponse,
): response is { Response: string; Error: string } => {
  return 'Error' in response
}

export const isSuccessfulResponse = (
  response: MovieResponse,
): response is { Search: Movie[]; totalResults: string; Response: string } => {
  return 'Search' in response
}

const movieSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addMatcher(
        movieApi.endpoints.getMoviesBySearch.matchPending,
        (state) => {
          state.loading = true
          state.error = undefined
        },
      )
      .addMatcher(
        movieApi.endpoints.getMoviesBySearch.matchFulfilled,
        (state, action) => {
          if (isSuccessfulResponse(action.payload)) {
            state.data = action.payload
            state.error = undefined
          } else if (isErrorType(action.payload)) {
            state.error = action.payload.Error
            state.data = undefined
          }
          state.loading = false
        },
      )
      .addMatcher(
        movieApi.endpoints.getMoviesBySearch.matchRejected,
        (state, action) => {
          state.error = action.error.message
          state.loading = false
        },
      )
  },
  initialState,
  name: 'movie',
  reducers: {},
})

export default movieSlice.reducer
