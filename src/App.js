import React, { useState } from 'react';
import './App.css';

import Category from './components/Category';

function App() {
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data);
    })
  }, [])

  const renderCategories = () => {
    return results.map (c => 
      <Category key={c.id} id={c.id} title={c.title} />
    );
  }


  return (
    <>
    <header>My Store</header>

    <section>
      <nav>
      {
        results && renderCategories()
      }
      </nav>
      <article>
        main area
      </article>
    </section>
    <footer>

    </footer>
    </>
  );
}

export default App;
