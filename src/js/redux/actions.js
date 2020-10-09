import { LOAD_BOOKS } from "./types";

const URL = 'http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books'

export function loadBooks() {
  return async dispatch => {
    const response = await fetch(URL)
    const json = await response.json()
    dispatch({type: LOAD_BOOKS, payload: json})
  }
}