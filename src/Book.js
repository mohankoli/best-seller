import React from 'react'

const Book = ({title, img, author, number}) => {
    return <section className='book'>
      <img alt={title} src={img}/>
      <h2>{title}</h2>
      <span className='number'>{number + 1}</span>
      <h4>{author}</h4>
    </section>
  }


export default Book;