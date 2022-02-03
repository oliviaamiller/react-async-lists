import './App.css';
import { useState, useEffect } from 'react';
import { fetchBooks,
  fetchCakes } from './services/fetch-utils';
import BooksList from './Books/BooksList';
import CakesList from './Cakes/CakesList';
// import your arrays here

function App() {

  const [books, setBooks] = useState([]);
  const [cakes, setCakes] = useState([]);

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
      
      <CakesList cakes={cakes} />
    </div>
  );
}

export default App;
