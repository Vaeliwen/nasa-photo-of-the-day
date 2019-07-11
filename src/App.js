import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { PhotoOfTheDay } from "./components/Photo";
import { Date } from './components/Date'
import { Title } from './components/Title'
import { Info } from './components/Info'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=5b0JU9caOsvt0R1kREtfXxgEyWnGhPCwWaINsFtt&date=2012-03-14`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log('Houston, we have a problem.'))
  }, [])

  console.log(data)

  return (
    <div className="App">
      <Date date={data.date} />
      <Title title={data.title} />
      <PhotoOfTheDay hdurl={data.hdurl} />
      <Info info={data.explanation} />
    </div>
  );
}

export default App;