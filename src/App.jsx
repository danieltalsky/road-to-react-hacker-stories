import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list = [
  {
    title: 'A Bewk',
    author: 'A Dewd',
    url: 'https://bewk.com',
    num_comments: 6,
    points: 23,
    objectID: 0,
  },
  {
    title: 'Anotha Bewk',
    author: 'El Doodalino',
    url: 'https://bewk.com',
    num_comments: 6,
    points: 23,
    objectID: 1,
  }
]

// NOW WORKING ON: React Fundamentals > Handler Functions in JSX

const App = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr></hr>

      <List />
    </div>
  )
}

/* 
  example of using the simpler non-curly brace declaration syntax
  where the whole function is a return statement
*/
const Search = () => {

  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target
    console.log(event.target.value);
  };
  
const blurry = (event) => {
  console.log("blurrrrrrrrry")
}

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onBlur={blurry} onChange={handleChange} />
    </div>
  );
}

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span><a href="{item.url}">{item.title}</a></span> - 
        <span> {item.author}</span> - 
        <span> Comments: {item.num_comments}</span> - 
        <span> Points: {item.points}</span>
      </li> 
    ))}
  </ul>  
);

export default App
