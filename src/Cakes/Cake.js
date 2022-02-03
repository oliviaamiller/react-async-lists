import './Cakes.css';

export default function Cake({ cake }) {
  return <div className='cake'>
    <p>{cake.name}</p>
    <p>{cake.flavor}</p>
    <p>{cake.icing}</p>
    <p>{cake.decoration}</p>

  </div>;
}

