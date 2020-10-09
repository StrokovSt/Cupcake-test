import React from 'react';
import { BooksListComponent } from '../components/booksComponent';

export const MainPage = () => {
  return (
    <div>
      <h1>Im main page</h1>
      <BooksListComponent books={[]}/>
    </div>
  )
}