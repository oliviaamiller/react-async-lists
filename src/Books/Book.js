import './Books.css';
import { Component } from 'react';

export default class Book extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    // const { book } = this.props;
    
    return (
      <div className='book'>
        <p className='book-title'>{this.props.book.title}</p>
        <p className='book-author'>{this.props.book.author}</p>
        <p>genre: {this.props.book.genre}</p>
        <p>published: {this.props.book.year}</p>
      </div>
    ); 
     
    
  }
}


// export default function Book({ book }) {
//   return <div className='book'>
//     <p className='book-title'>{book.title}</p>
//     <p className='book-author'>{book.author}</p>
//     <p>genre: {book.genre}</p>
//     <p>published: {book.year}</p>
//   </div>;
// }

