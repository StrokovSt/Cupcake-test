import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import { loadBooks } from '../redux/actions'
import { BookComponent } from './bookComponent'

const BooksListComponent = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books.books)
  const loading = useSelector(state => state.load.loading)

  useEffect(() => {
    dispatch(loadBooks())
  }, [])

  if (loading) {
    return (
      <div className="lds-ring">
        <div></div><div></div><div></div><div></div>
      </div>
      
    )
  }

  return (
    <div>
      <ul className="books-list">
        {books.map((book, index) => {
          return <BookComponent book={book} key={index}/>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps, null)(BooksListComponent)