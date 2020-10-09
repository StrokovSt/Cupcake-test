import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import { loadBooks } from '../redux/actions'
import { BookComponent } from './bookComponent'

const BooksListComponent = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books)
  const loading = useSelector(state => state.load.loading)
  const errorAlert = useSelector(state => state.load.alert)

  useEffect(() => {
    dispatch(loadBooks())
  }, [])

  return (
    <div>
      {loading && <div className="lds-ring">
        <div></div><div></div><div></div><div></div>
      </div>}
      {errorAlert && <p>Ошибыч</p>}
      <ul className="books-list">
        {books.map((book, index) => {
          return <BookComponent book={book} key={index}/>
        })}
      </ul>
    </div>
  )
}

export default BooksListComponent