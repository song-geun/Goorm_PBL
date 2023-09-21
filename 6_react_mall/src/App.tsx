import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu'
import Categories from './components/Categories'
import { Route, Routes } from 'react-router-dom';
import Carts from './components/Carts';
import Items from './components/Items';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="cart" element = {<Carts />} />
        <Route path="proct" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
