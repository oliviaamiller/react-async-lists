import './Candies.css';

export default function Candy({ candy }) {
  return <div className='candy'>
    <p className='candy-name'>{candy.name}</p>
    <p>{candy.type}</p>
    <p>{candy.flavor}</p>
    <p>created: {candy.year}</p>
  </div>;
}

