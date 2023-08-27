import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { loadState, saveState } from '../../utils/localStorageUtils'

const FAVORITES_KEY = 'favoritesMovies'

type MovieBrief = {
  id: string
  title: string
  poster: string
}

type FavoriteState = {
  favorites: MovieBrief[]
}

const initialState: FavoriteState = {
  favorites: loadState(FAVORITES_KEY) || [],
}

const favoritesSlice = createSlice({
  initialState,
  name: 'favorites',
  reducers: {
    addFavorite: (state, action: PayloadAction<MovieBrief>) => {
      const movieExists = state.favorites.some(
        (movie) => movie.id === action.payload.id,
      )
      if (!movieExists) {
        state.favorites.push(action.payload)
        saveState(FAVORITES_KEY, state.favorites)
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload,
      )
      saveState(FAVORITES_KEY, state.favorites)
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
