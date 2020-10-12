import { LOAD_BOOKS, ADD_PURCHASE, DELETE_PURCHASE, SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, CHANGE_PURCHASE_COUNT } from "./types"

const initialState = {
  books: localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')): [],
  purchase: localStorage.getItem('purchases') ? JSON.parse(localStorage.getItem('purchases')): [],
  alert: null
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload
    case ADD_PURCHASE:
      const purchaseBook = action.payload
      let bookIndex

      if (state.purchase.some(e => e.isbn13 === purchaseBook.isbn13)) {
        state.purchase.forEach((purchase, index) => {
          if (purchase.isbn13 === purchaseBook.isbn13) {
            bookIndex = index
          }
        })
        state.purchase[bookIndex].count = state.purchase[bookIndex].count + purchaseBook.count
        localStorage.setItem('purchases', JSON.stringify(state.purchase))
        return state
      }
      localStorage.setItem('purchases', JSON.stringify(state.purchase.concat(purchaseBook)))
      return {...state, purchase: state.purchase.concat(purchaseBook)}
    case DELETE_PURCHASE:
      return {...state, purchase: state.purchase.concat(action.payload)}
    case SHOW_PURCHASE_ALERT:
      return ({...state, alert: action.payload})
    case HIDE_PURCHASE_ALERT:
      return ({...state, alert: null})
    default: return state
  }
}