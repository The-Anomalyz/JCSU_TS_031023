import './App.css';
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home"
import Settings from './Settings'
import Profile from './Profile'
import Footer from "./Footer"
import Payment from './Payment'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Login from "./Login";
/*import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js'*/

import SignupForm from './SignupForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/signup'
          element={(
            <>
            
            <SignupForm/>
            
            </>
          )}/>
          <Route path='/profile'
          element={(
            <>
            
            <Profile/>
            
            </>
          )}/>
          <Route path='/settings'
          element={(
            <>
            <Header />
            <Settings/>
            
            </>
          )}/>
        <Route path='/login'
          element={(
            <>
            <Login/>
            </>
          )}/>
          <Route path='/'
          element={(
            <>
            <Header />
            <Home />
            
            </>
          )}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
