import React from 'react';
import {useSelector} from 'react-redux'

export const HeadingComponent = () => {
  const modalStatus = useSelector(state => state.modal.isDisplayed)
  const modalBook = useSelector(state => state.modal.book)

  const mainMessage = (
    <div className="heading-section__container container">
      <div className="heading-section__description">
        <h1>Welcome to Book store!</h1>
        <p>IT, Programming and Computer Science Books</p>
      </div>
    </div>
  )

  const modalMessage = (
    <div className="heading-section__container container">
      {modalBook ? <div className="heading-section__description heading-section__description--modal">
        <h1>{modalBook.title}</h1>
        <p>IT, Programming and Computer Science Books</p>
      </div> : null}
    </div>
  )

  return (
    <section className="page-main__heading-section heading-section">
      {modalStatus ? modalMessage : mainMessage}
    </section>
  )
}