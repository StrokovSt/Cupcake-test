import { LOAD_BOOKS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, ADD_PURCHASE, CHANGE_PURCHASE_COUNT } from "./types";

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
      dispatch(showAlert(SHOW_ALERT, HIDE_ALERT, 'Что-то пошло не так'))
      dispatch(hideLoader())
    }
  }
}

export function addPurchases(purchases) {
  return dispatch => {
    dispatch({
      type: ADD_PURCHASE,
      payload: purchases
    })
  }
}

export function changePurchase(count) {
  return dispatch => {
    dispatch({
      type: CHANGE_PURCHASE_COUNT,
      payload: count
    })
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

export function showAlert(showType, hideType, text) {
  return dispatch => {
    dispatch({
      type: showType,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert(hideType))
    }, 3000)
  }
}

export function hideAlert(type) {
  return {
    type: type
  }
}
