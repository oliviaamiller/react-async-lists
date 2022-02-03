import './Flowers.css';
import Flower from './Flower';

export default function FlowersList({ flowers }) {
  return <div className='flowers-list'>
    {flowers.map((flower, i) =>
      <Flower key={`${flower}-${i}`} flower={flower} />)}
  </div>;
}
