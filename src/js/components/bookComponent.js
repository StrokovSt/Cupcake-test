import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addPurchases, showAlert, setModalBook, showModal } from '../redux/actions'
import { SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, BOOKS_LIMIT } from '../redux/types';

export const BookComponent = ({book}) => {
  const [booksCount, setBooksCount] = useState(1)
  const [bookAlert, setBookAlert] = useState(false)
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.books.purchase)
  const errorAlert = useSelector(state => state.books.alert)

  const buttonSubmitClickHandler = () => { 
    if (purchases.some(e => e.isbn13 === book.isbn13)) {
      let bookIndex
      purchases.forEach((purchase, index) => {
        if (purchase.isbn13 === book.isbn13) {
          bookIndex = index
        }
      })
      if (purchases[bookIndex].count + booksCount > BOOKS_LIMIT) {
        dispatch(showAlert(SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, 'На складе отсутствует нужное количество товаров'))
        return
      }
    }

    if(booksCount <= BOOKS_LIMIT) {
      dispatch(addPurchases({...book, count: booksCount}))
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

  const bookClickHandler = () => {
    dispatch(setModalBook(book))
    dispatch(showModal())
  }

  return (
    <div className="book-card" onClick={bookClickHandler}>
      <img src={book.image}></img>
      {errorAlert && <p>{errorAlert}</p>}
      <h3>{book.title}</h3>
      <span>Book price: {book.price}</span>
      <p>Заказать книг {booksCount}</p>
      <button type="button" onClick={deleteBookHandler}>Удалить книгу</button>
      <button type="button" onClick={addBookHandler}>Добавить книгу</button>
      <button type="button" onClick={buttonSubmitClickHandler} disabled={booksCount > 0 ? false : true}>Добавить в корзину</button>
    </div>
  )
}