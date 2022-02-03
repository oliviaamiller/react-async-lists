import './App.css';
import { useState, useEffect } from 'react';
import { fetchBooks,
  fetchCakes,
  fetchCandies,
  fetchFlowers } from './services/fetch-utils';
import BooksList from './Books/BooksList';
import CakesList from './Cakes/CakesList';
import CandiesList from './Candies/CandiesList';
import FlowersList from './Flowers/FlowersList';
// import your arrays here

function App() {

  const [books, setBooks] = useState([]);
  const [cakes, setCakes] = useState([]);
  const [candies, setCandies] = useState([]);
  const [flowers, setFlowers] = useState([]);

  async function fetchBooksData() {
    const data = await fetchBooks();

    setBooks(data);
  }

  async function fetchCakesData() {
    const data = await fetchCakes();

    setCakes(data);
  }

  async function fetchCandiesData() {
    const data = await fetchCandies();

    setCandies(data);
  }

  async function fetchFlowersData() {
    const data = await fetchFlowers();

    setFlowers(data);
  }


  useEffect(() => {
    fetchBooksData();
    fetchCakesData();
    fetchCandiesData();
    fetchFlowersData();
  }, []);



  return (
    <div className="App">
      < BooksList books={books} />
      
      <CakesList cakes={cakes} />

      <CandiesList candies={candies} />

      <FlowersList flowers={flowers} />
    </div>
  );
}

export default App;
