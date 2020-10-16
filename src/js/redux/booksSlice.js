import { createSlice } from '@reduxjs/toolkit'

const booksListSlice = createSlice({
  name: 'booksList',
  initialState: {
    books: [],
    isLoading: false,
    alert: null
  },
  reducers: {
    loadBooks(state, action) {
      state.books = action.payload
    },
    showLoading(state) {
      state.isLoading = true
    },
    hideLoading(state) {
      state.isLoading = false
    },
    showAlert(state, action) {
      state.alert = action.payload
    },
    hideAlert(state) {
      state.alert = null
    }
  }
})

export default booksListSlice.reducer
export const {loadBooks, showLoading, hideLoading, showAlert, hideAlert} = booksListSlice.actions