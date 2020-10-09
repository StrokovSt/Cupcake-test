import { LOAD_BOOKS } from "./types"

const initialState = {
  books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books') ): [],
  purchase: []
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload
    default: return state
  }
}