import Cake from './Cake';
import './Cakes.css';

export default function CakesList({ cakes }) {
  return <div className='cakes-list'>
    {cakes.map((cake, i) =>
      <Cake key={`${cake}-${i}`} cake={cake} />)}

  </div>;
}
