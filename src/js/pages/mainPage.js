import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from "react-transition-group"
import BooksListComponent  from '../components/booksComponent';
import ModalBookComponent from '../components/modalBookComponent';

export const MainPage = () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(state => state.modal.isDisplayed)
  const modalBook = useSelector(state => state.modal.book)

  return (
    <main>
      <section className="books-section">
        <CSSTransition
          in={!modalStatus}
          timeout={1000}
          classNames="menu-primary"
          unmountOnExit>
            <BooksListComponent />
        </CSSTransition>

        <CSSTransition
          in={modalStatus}
          timeout={1000}
          classNames="menu-secondary"
          unmountOnExit>
            <ModalBookComponent />
        </CSSTransition>
      </section>
    </main>
  )
}
