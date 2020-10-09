import { LOAD_BOOKS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types";

const URL = 'http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books'

export function loadBooks() {
  return async dispatch => {
    try {
      if (!localStorage.getItem('books')) {
        dispatch(showLoader())
        const response = await fetch(URL)
        const json = await response.json()
        localStorage.setItem('books', JSON.stringify(json.books))
        dispatch({type: LOAD_BOOKS, payload: json})
        dispatch(hideLoader())
      }
    } catch (error) {
      dispatch(showAlert('Что-то пошло не так'))
      dispatch(hideLoader())
    }
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

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 10000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}