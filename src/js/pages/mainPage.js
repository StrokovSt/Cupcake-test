import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { CSSTransition } from "react-transition-group"
import BooksListComponent  from '../components/booksComponent';
import { HeadingComponent } from '../components/headingComponent';
import ModalBookComponent from '../components/modalBookComponent';

export const MainPage = () => {
  const [menuHeight, setMenuHeight] = useState(null);
  const modalStatus = useSelector(state => state.modal.isDisplayed)

  function calcHeight(el) {
    const height = el.offsetHeight + 20;
    setMenuHeight(height);
  }

  return (
    <main className="page-main">
      <HeadingComponent />

      <section className="page-main__books-section books-section container" style={{ height: menuHeight }}>
        <CSSTransition
          in={!modalStatus}
          timeout={1500}
          classNames="books-section"
          unmountOnExit
          onEnter={calcHeight}>
            <BooksListComponent/>
        </CSSTransition>

        <CSSTransition
          in={modalStatus}
          timeout={1500}
          classNames="modal-article"
          unmountOnExit
          onEnter={calcHeight}>
            <ModalBookComponent/>
        </CSSTransition>
      </section>
    </main>
  )
}
