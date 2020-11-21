import React from 'react'
import './App.css'
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'
import Main from './containers/Main/Main'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


function App() {

  let routes = (
    <Switch>
      <Route path="/quiz-creator" component={Main} />
      <Route path="/quiz/:id" component={Main} />
      <Route path="/logout" component={Main} />
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
