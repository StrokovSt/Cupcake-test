import React from 'react';
import { BookComponent } from './bookComponent';

export const BooksListComponent = ({books}) => {
  if (!books.length) {
    return (
      <div className="books-error">
        <p>Книги не найдены</p>
      </div>
    )
  }

  return (
    <ul className="books-list">
      {books.map(book => {
        return <BookComponent book={book} />
      })}
    </ul>
  )
}