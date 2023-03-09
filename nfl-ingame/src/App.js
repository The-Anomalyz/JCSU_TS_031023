import './App.css';
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home"
import Footer from "./Footer"
import Payment from './Payment'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Login from "./Login";
/*import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js'*/


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/login'
          element={(
            <>
            
            <Login/>
            
            </>
          )}/>
          <Route path='/'
          element={(
            <>
            
            <Home />
            
            </>
          )}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
