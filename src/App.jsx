import * as React from 'react'
import './App.css'

// NOW WORKING ON: React Fundamentals > Callback Handlers

const App = () => {

  const stories = [
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
    },
    {
      title: 'Thord Bewk',
      author: 'Mah Man',
      url: 'https://thord.com',
      num_comments: 23,
      points: 1,
      objectID: 2,
    }
  ]

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr></hr>

      <List list={stories} />
    </div>
  )
}

/* 
  example of using the simpler non-curly brace declaration syntax
  where the whole function is a return statement
*/
const Search = (props) => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    
      <p>Searching for <strong>{searchTerm}</strong></p>
    
    </div>
  );
}

const List = (props) => (
  <ul>
    {props.list.map((item) => (
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
