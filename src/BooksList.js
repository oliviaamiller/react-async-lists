import Book from './Book';

export default function BooksList({ books }) {
  return <div>
    {books.map((book, i) => 
      <Book key={`${book}-${i}`} book={book} />)}
  </div>;
}

