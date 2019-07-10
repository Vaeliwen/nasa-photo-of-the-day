import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./App.css";

function App() {
  const [data, setData] = useState()

  const fetchSpace = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=5b0JU9caOsvt0R1kREtfXxgEyWnGhPCwWaINsFtt&date=2012-03-14`)
      .then(res => res.json())
      .then(res => console.log(res.hdurl))
      .catch(err => console.log('Houston, we have a problem.'))
  }


  useEffect(() => {
    fetchSpace()
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
