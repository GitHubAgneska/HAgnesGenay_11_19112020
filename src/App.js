import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header  from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/containers/Home'
import NotFoundPage from './components/containers/404'
import About from './components/containers/About'
import Rental from './components/containers/Rental'


// each top-level feature declares its own route
// Fragment used here because Router can't have multiple children
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
              <Header/>
                <Router>
                  <Fragment>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/rental" component={Rental} />
                    <Route exact path="/about" component={About} />
                    <Route component={NotFoundPage} />
  
                  </Fragment>
                </Router>
                
              <Footer />
        </div>
      </div>
    );
  }
}

export default App;
