import './App.css';
import { useState } from 'react';
import { fetchBooks } from './services/fetch-utils';
import BooksList from './BooksList';
// import your arrays here

function App() {

  const [books, setBooks] = useState([]);

  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      < BooksList books={books} />
    </div>
  );
}

export default App;
