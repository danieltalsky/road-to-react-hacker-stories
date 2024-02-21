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
    objectID: 0,
  }
]

// NOW WORKING ON: React Fundamentals > React Component Instantiation

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <List /><List />

      <Search />

      <List />
    </div>
  )
}

function Search() {
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

function List() {
  return(
    <ul>
    {list.map(function (item) {
      return (
      <li key={item.objectID}>
        <span><a href="{item.url}">{item.title}</a></span> - 
        <span> {item.author}</span> - 
        <span> Comments: {item.num_comments}</span> - 
        <span> Points: {item.points}</span>
      </li> 
      );
    })}
    </ul>  
  );
}

export default App
