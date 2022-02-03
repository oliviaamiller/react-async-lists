import './App.css';
import { useState, useEffect } from 'react';
import { fetchBooks,
  fetchCakes } from './services/fetch-utils';
import BooksList from './Books/BooksList';
import CakesList from './Cakes/CakesList';
import CandiesList from './Candies/CandiesList';
// import your arrays here

function App() {

  const [books, setBooks] = useState([]);
  const [cakes, setCakes] = useState([]);
  const [candies, setCandies] = useState([]);

  async function fetchBooksData() {
    const data = await fetchBooks();

    setBooks(data);
  }

  async function fetchCakesData() {
    const data = await fetchCakes();

    setCakes(data);
  }

  useEffect(() => {
    fetchBooksData();
    fetchCakesData();
  }, []);



  return (
    <div className="App">
      < BooksList books={books} />
      
      <CakesList cakes={cakes} />

      <CandiesList candies={candies} />
    </div>
  );
}

export default App;
