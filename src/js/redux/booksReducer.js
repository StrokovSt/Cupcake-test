import { LOAD_BOOKS } from "./types"

const initialState = {
  books: []
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload
    default: return state
  }
}