import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooks, showLoading, hideLoading, showAlert, hideAlert } from "../redux/booksSlice"
import { BookComponent } from './bookComponent'

const BooksListComponent = () => {
  const URL = 'http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books'

  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books)
  const isLoading = useSelector(state => state.books.isLoading)
  const alert = useSelector(state => state.books.alert) 

  const asyncLoad = () => {
    return async dispatch => {
      try {
        dispatch(showLoading())
        const response = await fetch(URL, {method: 'GET', mode: 'cors', cache: 'no-store', headers: {'Content-Type': 'application/json'}})
        const json = await response.json()
        localStorage.setItem('books', JSON.stringify(json.books))
        dispatch(loadBooks(json.books))
        dispatch(hideLoading())
      } catch (error) {
        dispatch(hideLoading())
        dispatch(showAlert('Возникла какая-то ошибка:', error))
      }
    }
  }

  useEffect(() => {
    const localStorageBooks = JSON.parse(localStorage.getItem('books'))
    if (!localStorageBooks) {
      dispatch(asyncLoad())
    } else {
      dispatch(loadBooks(localStorageBooks))
    }
  }, [])

  return (
    <Fragment>
      {isLoading && <div className="lds-ring">
        <div></div><div></div><div></div><div></div>
      </div>}
      {alert && <p>{alert}</p>} 
      <ul className="books-section__books-list">
        {books.map((book, index) => {
          return <BookComponent book={book} key={index} index={index}/>
        })}
      </ul>
    </Fragment>
  )
}

export default BooksListComponent