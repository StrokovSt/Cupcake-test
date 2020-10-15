import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { setModalBook, showModal } from '../redux/actions'

export const BookComponent = ({book}) => {
  const dispatch = useDispatch()

  const bookClickHandler = () => {
    dispatch(setModalBook(book))
    dispatch(showModal())
  }

  return (
    <li className="books-section__item" onClick={bookClickHandler}>
      <img src={book.image}></img>
      <div className="books-section__item-description">
        <h3>{book.title}</h3>
        <p>Book price: <span>{book.price}$</span></p>
      </div>
    </li>
  )
}