import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResults] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data);
    })
  }, [])

  return (
    <div className="App">
      {
      result.map (d => (
        <div key={d.id}>{d.tittle}</div>
      ))
      }
    </div>
  );
}

export default App;
