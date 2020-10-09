import React from 'react'
import {connect} from 'react-redux'
import { BookComponent } from './bookComponent'

const BooksListComponent = ({books}) => {
  if (!books.length) {
    return (
      <div className="books-error">
        <p>Книги не найдены</p>
      </div>
    )
  }

  return (
    <ul className="books-list">
      {books.map((book, index) => {
        return <BookComponent book={book} key={index}/>
      })}
    </ul>
  )
}

const mapStateToProps = state => {
  console.log(state.books)
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps, null)(BooksListComponent)