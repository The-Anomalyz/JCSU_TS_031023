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
import Privacy from './Privacy';
import Help from './Help';
import FAQ from './FAQ';
import Terms from './Terms';
import Contact from './Contact';
import About from './About';
import GoPro from './GoPro';
import Camedup from './Camedup';
import Chat from './Chat';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/chat'
          element={(
            <>
            <Header />
            <Chat />
            <Footer/>

            </>
          )}/>
        <Route path='/camedup'
          element={(
            <>
            <Header />
            <Camedup />
            <Footer/>

            </>
          )}/>
        <Route path='/go-pro'
          element={(
            <>
            <Header />
            <GoPro />
            <Footer/>

            </>
          )}/>
        <Route path='/about-us'
          element={(
            <>
            <Header />
            <About />
            <Footer/>

            </>
          )}/>
        <Route path='/contact-us'
          element={(
            <>
            <Header />
            <Contact />
            <Footer/>

            </>
          )}/>
        <Route path='/terms-and-conditions'
          element={(
            <>
            <Header />
            <Terms />
            <Footer/>

            </>
          )}/>
        <Route path='/faq'
          element={(
            <>
            <Header />
            <FAQ />
            <Footer/>

            </>
          )}/>
        <Route path='/help'
          element={(
            <>
            <Header />
            <Help />
            <Footer/>

            </>
          )}/>
        <Route path='/privacy'
          element={(
            <>
            <Header />
            <Privacy />
            <Footer/>

            </>
          )}/>
        <Route path='/signup'
          element={(
            <>
            
            <SignupForm/>
            
            </>
          )}/>
          <Route path='/profile'
          element={(
            <>
            <Header />
            <Profile/>
            <Footer />
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
            <Footer/>

            </>
          )}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
