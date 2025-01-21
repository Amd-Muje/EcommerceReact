import React from "react";

import { Link, Outlet } from "react-router";


const Layout = ({categories}) => {

  const renderCategories = () => {
      return categories.data.map (c => 
        <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
      );
    }
  

  return (
    <>
      <header className="p-10 bg-slate-500">My Store</header>

      <section className="flex">
        <nav className="bg-cyan-400 p-10 gap-2">
          {categories.errorMessage && (
            <div>Error: {categories.errorMessage}</div>
          )}
          <ul>{categories.data && renderCategories()}</ul>
        </nav>
        <main className="">
          <Outlet />
        </main>
      </section>
      <footer><Link to="/">Home</Link> | <Link to="/basket">Basket</Link></footer>
    </>
  );
};

export default Layout;
