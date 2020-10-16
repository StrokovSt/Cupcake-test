import { createSlice } from '@reduxjs/toolkit'

const modalBookSlice = createSlice({
  name: 'modalBook',
  initialState: {
    isDisplayed: false,
    book: null,
  },
  reducers: {
    setModalBook(state, action) {
      state.book = action.payload
    },
    showModalBook(state) {
      state.isDisplayed = true
    },
    hideModalBook(state) {
      state.isDisplayed = false
    }
  }
})

export default modalBookSlice.reducer
export const {setModalBook, showModalBook, hideModalBook} = modalBookSlice.actions