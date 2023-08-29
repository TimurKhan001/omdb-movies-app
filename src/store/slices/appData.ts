import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { loadState, saveState } from '../../utils/localStorageUtils'

const DARK_MODE_KEY = 'darkMode'

type AppState = {
  darkMode: boolean
}

const initialState: AppState = {
  darkMode: loadState(DARK_MODE_KEY) || false,
}

const appDataSlice = createSlice({
  initialState,
  name: 'appState',
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload
      saveState(DARK_MODE_KEY, state.darkMode)
    },
  },
})

export const { setDarkMode } = appDataSlice.actions
export default appDataSlice.reducer
