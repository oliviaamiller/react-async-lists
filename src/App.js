import './App.css';
import { useState, useEffect } from 'react';
import { fetchBooks } from './services/fetch-utils';
import BooksList from './BooksList';
// import your arrays here

function App() {

  const [books, setBooks] = useState([]);

  async function fetchBooksData() {
    const data = await fetchBooks();

    setBooks(data);
  }

  useEffect(() => {
    fetchBooksData();
  }, []);



  return (
    <div className="App">
      < BooksList books={books} />
    </div>
  );
}

export default App;
