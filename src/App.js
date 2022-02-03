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
import loadImg from './load.gif';
// import your arrays here

function App() {

  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(false);
  const [cakes, setCakes] = useState([]);
  const [cakesLoading, setCakesLoading] = useState(false);
  const [candies, setCandies] = useState([]);
  const [candiesLoading, setCandiesLoading] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [flowersLoading, setFlowersLoading] = useState(false);

  async function fetchBooksData() {
    setBooksLoading(true);
    const data = await fetchBooks();

    setBooksLoading(false);
    setBooks(data);
  }

  async function fetchCakesData() {
    setCakesLoading(true);
    const data = await fetchCakes();

    setCakesLoading(false);
    setCakes(data);
  }

  async function fetchCandiesData() {
    setCandiesLoading(true);
    const data = await fetchCandies();

    setCandiesLoading(false);
    setCandies(data);
  }

  async function fetchFlowersData() {
    setFlowersLoading(true);
    const data = await fetchFlowers();

    setFlowersLoading(false);
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
      
      { booksLoading ? <img src={loadImg} /> : < BooksList books={books} /> }
      
      { cakesLoading ? <img src={loadImg} /> : <CakesList cakes={cakes} /> }

      { candiesLoading ? <img src={loadImg} /> : <CandiesList candies={candies} /> }

      { flowersLoading ? <img src={loadImg} /> : <FlowersList flowers={flowers} /> }
      
    </div>
  );
}

export default App;
