import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { movieApi } from './slices/movieApi'
import movieReducer from './slices/movieSlice'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch

// Set up listeners for RTK Query's behaviors (like refetchOnFocus/refetchOnReconnect)
setupListeners(store.dispatch)
