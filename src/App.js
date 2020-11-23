import React from 'react'
import './App.css'
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'
import Main from './containers/Main/Main'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
