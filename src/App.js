import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { PhotoOfTheDay } from "./components/Photo";

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
      <h1>{data.date}</h1>
      <h2>{data.title}</h2>
      <PhotoOfTheDay hdurl={data.hdurl} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;