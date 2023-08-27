import type { Middleware } from '@reduxjs/toolkit'

import { saveState } from '../utils/localStorageUtils'

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action)
    const favorites = store.getState().favorites.favorites
    saveState('favoritesMovies', favorites)
    return result
  }
