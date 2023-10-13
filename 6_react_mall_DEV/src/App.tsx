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
        <Route path="/Goorm_PBL/6_react_mal/">
          <Route index element={<Menu />} />
          <Route path="Goorm_PBL/6_react_mall/Carts/" element={<Carts />} />
          <Route path="Goorm_PBL/6_react_mall/Items/" element={<Items />} />
          <Route path='Goorm_PBL/6_react_mall/Login/' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
