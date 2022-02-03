import Book from './Book';
import './Books.css';

export default function BooksList({ books }) {
  return <div className='book-list'>
    {books.map((book, i) => 
      <Book key={`${book}-${i}`} book={book} />)}
  </div>;
}

