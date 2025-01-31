import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { PhotoOfTheDay } from "./components/Photo";
import { DoubleHeader } from './components/Header'
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


  return (
    <div className="App">
      <DoubleHeader date={data.date} title={data.title} />
      <PhotoOfTheDay hdurl={data.hdurl} />
      <Info info={data.explanation} />
    </div>
  );
}

export default App;