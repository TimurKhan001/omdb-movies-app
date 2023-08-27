import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type SearchResultsState = {
  results: any[]
  searchTerm: string
  currentPage: number
  lastFetchedPage: number // Representing the last fetched page
}

const initialState: SearchResultsState = {
  currentPage: 1,
  lastFetchedPage: 0,
  results: [],
  searchTerm: '', // Initialize to 0 since no pages are fetched initially
}

const searchResultsSlice = createSlice({
  initialState,
  name: 'searchResults',
  reducers: {
    clearSearchResults: (state) => {
      state.results = []
      state.searchTerm = ''
      state.currentPage = 1
      state.lastFetchedPage = 0 // Reset to 0
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setLastFetchedPage: (state, action: PayloadAction<number>) => {
      state.lastFetchedPage = action.payload
    },
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.results = action.payload
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
})

export const {
  setSearchResults,
  clearSearchResults,
  setSearchTerm,
  setCurrentPage,
  setLastFetchedPage,
} = searchResultsSlice.actions

export default searchResultsSlice.reducer
