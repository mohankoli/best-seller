import React from 'react'
import Book from './Book';

const books= [
    {
      title: 'Atomic Habits',
      author:'James Clear',
      img:'./images/book1.jpg',
      id:1
    },
    {
      title: 'Grandmas Bag of Stories',
      author:'Sudha Murty',
      img:'./images/book2.jpg',
      id:2
    },
    {
        title: 'Atomic Habits',
        author:'James Clear',
        img:'./images/book1.jpg',
        id:3
      }
  ]; 
  
  
function Booklist() {
    return (
        <>
        <h1>amazon best sellers</h1>
        
        <section className='booklist'>
          {
            books.map((book, index)=>{
              return <Book {...book} key={book.id} number={index}></Book>
            })
          }  
        </section>
        </>
        )
}

export default Booklist