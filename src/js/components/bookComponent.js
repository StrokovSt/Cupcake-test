import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addPurchases, showAlert } from '../redux/actions'
import { SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT } from '../redux/types';

export const BookComponent = ({book}) => {
  const BOOKS_LIMIT = 3
  const [booksCount, setBooksCount] = useState(1)
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
      console.log(purchases[bookIndex].count + booksCount)
      if (purchases[bookIndex].count + booksCount > BOOKS_LIMIT) {
        dispatch(showAlert(SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, 'На складе отсутствует нужное количество товаров'))
        return
      }
    }

    if(booksCount <= BOOKS_LIMIT) {
      dispatch(addPurchases({...book, count: booksCount}))
    } else {
      dispatch(showAlert(SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, 'На складе отсутствует нужное количество товаров'))
    } 
  }

  const addBookHandler = () => {
    setBooksCount(prev => prev + 1)
  }

  const deleteBookHandler = () => {
    setBooksCount(prev => prev - 1)
    if (booksCount <= 1) {
      setBooksCount(1)
    }
  }

  return (
    <div className="book-card">
      <img src={book.image}></img>
      {errorAlert && <p>{errorAlert}</p>}
      <h3>{book.title}</h3>
      <span>Book price: {book.price}</span>
      <p>Заказать книг {booksCount}</p>
      <button type="button" onClick={deleteBookHandler}>Удалить книгу</button>
      <button type="button" onClick={addBookHandler}>Добавить книгу</button>
      <button type="button" onClick={buttonSubmitClickHandler}>Добавить в корзину</button>
    </div>
  )
}