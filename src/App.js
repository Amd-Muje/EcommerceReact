import React, { useState } from 'react';
import './App.css';
import {getCategories,getProducts} from './fetcher';

import Category from './components/category';
import Category_Product from './components/categoryProduct';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});
  const [products, setProducts] = useState({errorMessage: '', data: []});

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);  
    }
    fetchData();
  }, [])

  const handleCategoryClick = id => {

    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);  
    }
    fetchData();
    // alert (id);
  }

  const renderCategories = () => {
    return categories.data.map (c => 
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)}/>
    );
  }

  const renderProducts = () => {
    return products.data.map (p =>
      <CategoryProduct{...p}>{p.title}</CategoryProduct>
    );
  }


  return (
    <>
    <header className='p-10 bg-slate-500'>My Store</header>

    <section className='flex'>
      <nav className='bg-cyan-400 p-10 gap-2'>
      {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
      {
        categories.data && renderCategories()
      }
      </nav>
      <main className=''>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}
          <h1 className='font-semibold ml-5 my-10'> products </h1>
          {products && renderProducts()}
      </main>
    </section>
    <footer>

    </footer>
    </>
  );
}

export default App;
