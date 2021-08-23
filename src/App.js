import React, {Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header  from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/containers/Home'
import NotFoundPage from './components/containers/404'
import About from './components/containers/About'
import Rental from './components/containers/Rental'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// each top-level feature declares its own route
// Fragment used here because Router can't have multiple children
const App = () =>  {

    return (
      <div className="App">
        <div className="container">
              <Header/>
              
              <Router>
                <Fragment>
                  <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/rental/:id" component={Rental} />
                    <Route exact path="/about" component={About} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </Fragment>
              </Router>
      
              <Footer />
        </div>
      </div>
    );
}

export default App
