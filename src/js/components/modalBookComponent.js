import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { hideModalBook } from "../redux/modalSlice"
import { addPurchase, showPurchasesAlert, hidePurchasesAlert } from "../redux/purchasesSlice"

const ModalBookComponent = () => {
  const BOOKS_LIMIT = 3
  const dispatch = useDispatch()
  const modalBook = useSelector(state => state.modal.book)
  
  const [booksCount, setBooksCount] = useState(1)
  const purchases = useSelector(state => state.purchases.purchases)
  const errorAlert = useSelector(state => state.purchases.alert)

  useEffect(() => {
    localStorage.setItem('purchases', JSON.stringify(purchases))
  }, [purchases])

  const buttonSubmitClickHandler = () => { 
    if (purchases.some(e => e.isbn13 === modalBook.isbn13)) {
      let bookIndex
      purchases.forEach((purchase, index) => {
        if (purchase.isbn13 === modalBook.isbn13) {
          bookIndex = index
        }
      })
      if (purchases[bookIndex].count + booksCount > BOOKS_LIMIT) {
        dispatch(showPurchasesAlert())

        setTimeout(() => {
          dispatch(hidePurchasesAlert())
        }, 3000)
        return
      }
    }

    if(booksCount <= BOOKS_LIMIT) {
      dispatch(addPurchase({...modalBook, count: booksCount}))
      setBooksCount(1)
    } else {
      dispatch(showPurchasesAlert())
        
      setTimeout(() => {
        dispatch(hidePurchasesAlert())
      }, 3000)
      return
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
    dispatch(hideModalBook())
    window.removeEventListener('keyup', escPressHandler)
  }

  const escPressHandler = (evt) => {
    if (evt.keyCode === 27) {
      closeHandler()
    }
  }

  window.addEventListener('keyup', escPressHandler)

  return (
    <article className="books-section__modal-article modal-article">
      <div className="modal-article__book-container">
        <div className="modal-article__img-container">
          <img src={modalBook.image}></img>
        </div>
        <div className="modal-article__price-container">
        <button className="modal-article__remove-button" type="button" onClick={deleteBookHandler}>Удалить книгу</button>
          <span>{booksCount}</span>
          <button className="modal-article__add-button" type="button" onClick={addBookHandler}>Добавить книгу</button>
          <button className="modal-article__submit-button" type="button" onClick={buttonSubmitClickHandler} disabled={booksCount > 0 ? false : true}>Добавить в корзину</button>
        </div>
      </div>
      <div className="modal-article__description-container">
        <button className="modal-article__close-button" type="button" onClick={closeHandler}>to home page</button>
        
        {errorAlert ? <div className="modal-article__alert-container">
          <span>{errorAlert}</span>
        </div> : null}
        
        <table className="modal-article__table">
          <tbody>
            <tr className="modal-article__table-tr">
              <td className="modal-article__table-td">Price</td>
              <td className="modal-article__table-td">{modalBook.price}</td>
            </tr>
            <tr className="modal-article__table-tr">
              <td className="modal-article__table-td">Rating</td>
              <td className="modal-article__table-td">Rating</td>
            </tr>
            <tr className="modal-article__table-tr">
              <td className="modal-article__table-td">Author</td>
              <td className="modal-article__table-td">Author</td>
            </tr>
            <tr className="modal-article__table-tr">
              <td className="modal-article__table-td">Language</td>
              <td className="modal-article__table-td">Language</td>
            </tr>
            <tr className="modal-article__table-tr">
              <td className="modal-article__table-td">Isbn13</td>
              <td className="modal-article__table-td">{modalBook.isbn13}</td>
            </tr>
        </tbody>
        </table>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </article>
  )
}

export default ModalBookComponent