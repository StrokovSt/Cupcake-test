import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import BooksListComponent  from '../components/booksComponent';
import ModalBookComponent from '../components/modalBookComponent';

export const MainPage = () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.modal.isDisplayed)
  const modalBook = useSelector(state => state.modal.book)

  console.log(modalStatus, modalBook)

  return (
    <main>
      <h1>Im main page</h1>
      {modalStatus ? <ModalBookComponent /> : <BooksListComponent />}
    </main>
  )
}