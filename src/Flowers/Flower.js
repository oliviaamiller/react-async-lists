import './Flowers.css';

export default function Flower({ flower }) {
  return <div className='flower'>
    <p className='flower-name'>{flower.name}</p>
    <p>in bloom: {flower.bloom}</p>
    <p>zone: {flower.zone}</p>
    <p>edible? {flower.edible}</p>
  </div>;
}

