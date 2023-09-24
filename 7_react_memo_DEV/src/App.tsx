import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Nav from './components/Nav';
import Head from './components/Head';
import Main from './components/Main';



import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { app } from './api/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './api/user';



function App() {
  const Dispatch = useDispatch();
  const auth = getAuth(app);
  getRedirectResult(auth)
    .then((result: any) => {
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user.email;

      Dispatch(setUser(user));
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email: any = error.customData;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });


  return (
    <div className='App'>
      <div className='flex flex:row'>
        <Nav />
        <Head />
      </div>
      <Routes>
        <Route index element={<Main />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
