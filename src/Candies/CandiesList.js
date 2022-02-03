import './Candies.css';
import Candy from './Candy';

export default function CandiesList({ candies }) {
  return <div className='candies-list'>
    {candies.map((candy, i) =>
      <Candy key={`${candy}-${i}`} candy={candy} />)}

  </div>;
}

