import React from 'react'
import './App.css'
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'
import Main from './containers/Main/Main'
import { BrowserRouter } from 'react-router-dom'
import FastScroll from './components/UI/FastScroll/FastScroll'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      <FastScroll />
    </BrowserRouter>

  );
}

export default App;
