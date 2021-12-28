// if you use 'rafce', react will create the component with the name of the file
import React from 'react'

// Components
// Paremeters go in ()
// Call 'props' whatever you want but convention is props
// Alternatively you can create a 'const {img, title, author} = props' and get rid of props. as the accessor to img/title/author. OORRR you can put {img, title, author} directly into the parameter of const Book i.e. Book = ({img, title, author}).onst Book = (props) => {
const Book = (props) => {
  const { img, title, author } = props
  // Add Attribute and eventHandler(onClick, onMouseOver)
  const clickHandler = () => {
    alert('hello world')
    // Alternativley you can do inline like this: 'onClick={() => alert('hello world')}'
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        //console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        Move Complex Example
      </button>
    </article>
  )
}
// Default export - only can have 1 default export per file, but 'name exports' you can have multiple.
export default Book

// Inline CSS is stronger than index.css changes, only works for implemented properties.
// Must add {} to activate JSX
// We must have an expression in curly braces
