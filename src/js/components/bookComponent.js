import React from 'react';

export const BookComponent = ({book}) => {
  return (
    <div className="book-card">
      <img src={book.image}></img>
      <h3>{book.title}</h3>
      <span>Book price: {book.price}</span>
    </div>
  )
}