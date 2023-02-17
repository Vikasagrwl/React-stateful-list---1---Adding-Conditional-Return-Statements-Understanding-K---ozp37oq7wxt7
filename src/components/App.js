import React from 'react'
import { useState } from 'react';
import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
  let [movieList, setMovieList]= useState([]);
  let [text, setText]=useState("No year selected");
  const getMovies = (event)=>{
    const key=event.target.value;
    setText("Selected year-"+key);
    for(const element in data){
      if(element==key){
        setMovieList(data[element]);
        return;
      }
    };
    return;
  }

  return (
    <div id="main">
      <select name="" id="" onChange={getMovies}>
        <option name="year" value="" > </option>
        <option name="year" value="2018">2018</option>
        <option name="year" value="2019">2019</option>
        <option name="year" value="2020">2020</option>
        <option name="year" value="2021">2021</option>
        <option name="year" value="2022">2022</option>
      </select>
      <p>{text}</p>
      <div>
        <ul>
          {movieList.map((ele, index)=>{
            return <li key={index}>{ele}</li>
          })}
        </ul>
      </div>
    </div>
  )
}


export default App;
