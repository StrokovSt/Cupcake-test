import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_BOOK } from "./types"

const initialState = {
  isDisplayed: false,
  book: null
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return ({...state, isDisplayed: true})
    case HIDE_MODAL:
      return ({...state, isDisplayed: false})
    case SET_MODAL_BOOK:
      return ({...state, book: action.book})
    default: return state
  }
}