import React from 'react'
import ReactDom from 'react-dom'
import { Children } from 'react/cjs/react.production.min'
// Import CSS
import './index.css'

// variables
// books variable can now be found in books.js - Cleaning up our index
import { books } from './books' // Use curly braces because it is a 'named export'

import Book from './Book'

// Stateless functional component or DOM component
// Must capitalize the function name for react to know it is a react component
// Returns a single element
function BookList() {
  // Need to return html (jsx)
  return (
    // If you want child props, must get rid of self closing bracket.
    <section className='booklist'>
      {books.map((book) => {
        // const { img, title, author } = book // Dont need this because it is destructed in the Book variable
        return <Book key={book.id} {...book}></Book> // {...} i would like to spread out all the properties here coming from the book. Also lets you take away the props.book in components
      })}
    </section>
  )
}

// Components
// const Book = (props) => {} Can now be found in Books.js (Cleaning up index.js)

// Always self close first parameter
ReactDom.render(<BookList />, document.getElementById('root'))
