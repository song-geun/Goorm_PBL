import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu'
import Categories from './components/Categories'
import { Route, Routes } from 'react-router-dom';
import Carts from './components/Carts';
import Items from './components/Items';
import Login from './components/Login';
function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes >
        <Route path="/6_react_mall">
          <Route index element={<Menu />} />
          <Route path="Carts" element={<Carts />} />
          <Route path="Items" element={<Items />} />
          <Route path='Login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
