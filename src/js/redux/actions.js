import { LOAD_BOOKS, SHOW_LOADER, HIDE_LOADER } from "./types";

const URL = 'http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books'

export function loadBooks() {
  return async dispatch => {
    dispatch(showLoader())
    const response = await fetch(URL)
    const json = await response.json()
    dispatch({type: LOAD_BOOKS, payload: json})
    dispatch(hideLoader())
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}