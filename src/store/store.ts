import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { localStorageMiddleware } from './localStorageMiddleware'
import appDataReducer from './slices/appData'
import favoritesReducer from './slices/favoritesSlice'
import { movieApi } from './slices/movieApi'
import movieReducer from './slices/movieSlice'
import searchResultsReducer from './slices/searchResultsSlice'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(movieApi.middleware)
      .concat(localStorageMiddleware),
  reducer: {
    appData: appDataReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoritesReducer,
    movie: movieReducer,
    searchResults: searchResultsReducer,
  },
})

export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
