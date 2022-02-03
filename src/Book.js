import React from 'react';

export default function Book({ book }) {
  return <div>
    <p>{book.title}</p>
    <p>{book.author}</p>
    <p>genre: {book.genre}</p>
    <p>published: {book.year}</p>
  </div>;
}

