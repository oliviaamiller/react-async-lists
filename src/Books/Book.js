import './Books.css';

export default function Book({ book }) {
  return <div className='book'>
    <p className='book-title'>{book.title}</p>
    <p className='book-author'>{book.author}</p>
    <p>genre: {book.genre}</p>
    <p>published: {book.year}</p>
  </div>;
}

