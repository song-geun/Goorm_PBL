import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Nav from './components/Nav';
import Head from './components/Head';

function App() {
  return (
    <div className='App'>
      <div className='flex flex:row'>
        <Nav />
        <Head />
      </div>
      <Routes>
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
