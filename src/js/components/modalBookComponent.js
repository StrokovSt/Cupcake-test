import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addPurchases, hideModal, showAlert } from '../redux/actions'
import { BOOKS_LIMIT, SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT } from '../redux/types'

const ModalBookComponent = () => {
  const dispatch = useDispatch()
  const modalBook = useSelector(state => state.modal.book)
  
  const [booksCount, setBooksCount] = useState(1)
  const purchases = useSelector(state => state.books.purchase)
  const errorAlert = useSelector(state => state.books.alert)

  const buttonSubmitClickHandler = () => { 
    if (purchases.some(e => e.isbn13 === modalBook.isbn13)) {
      let bookIndex
      purchases.forEach((purchase, index) => {
        if (purchase.isbn13 === modalBook.isbn13) {
          bookIndex = index
        }
      })
      if (purchases[bookIndex].count + booksCount > BOOKS_LIMIT) {
        dispatch(showAlert(SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, 'На складе отсутствует нужное количество товаров'))
        return
      }
    }

    if(booksCount <= BOOKS_LIMIT) {
      dispatch(addPurchases({...modalBook, count: booksCount}))
      setBooksCount(1)
    } else {
      dispatch(showAlert(SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, 'На складе отсутствует нужное количество товаров'))
    } 
  }

  const addBookHandler = () => {
    setBooksCount(prev => prev + 1)
  }

  const deleteBookHandler = () => {
    setBooksCount(prev => prev - 1)
    if (booksCount <= 0) {
      setBooksCount(0)
    }
  }

  const closeHandler = () => {
    dispatch(hideModal())
    window.removeEventListener('keyup', escPressHandler)
  }

  const escPressHandler = (evt) => {
    if (evt.keyCode === 27) {
      closeHandler()
    }
  }

  window.addEventListener('keyup', escPressHandler)

  return (
    <article className="modal-article">
      <h3>{modalBook.title}</h3>
      {errorAlert && <p>{errorAlert}</p>}
      <img src={modalBook.image}></img>
      <span>Price: {modalBook.price}</span>
      <button type="button" onClick={closeHandler}>Закрыть окно</button>
      <button type="button" onClick={deleteBookHandler}>Удалить книгу</button>
      <button type="button" onClick={addBookHandler}>Добавить книгу</button>
      <button type="button" onClick={buttonSubmitClickHandler} disabled={booksCount > 0 ? false : true}>Добавить в корзину</button>
    </article>
  )
}

export default ModalBookComponent