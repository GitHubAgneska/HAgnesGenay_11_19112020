import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header  from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/containers/Home'
import NotFoundPage from './components/containers/404'
import KasaValues from './components/containers/KasaValues'
import Rental from './components/containers/Rental'



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
              <Header/>
                <Router>
                  <Route exact path="/" component={Home} />
                  
                  <Route exact path="/rental" render={props => (
                    <React.Fragment>
                      <Rental />
                    </React.Fragment>
                  )}/>

                  <Route exact path="/values" render={props => (
                    <React.Fragment>
                      <KasaValues />
                    </React.Fragment>
                  )}/>
                  <Route path="*" render={props => (
                    <React.Fragment>
                      <NotFoundPage />
                    </React.Fragment>
                  )}/>
  
                </Router>
                
              <Footer />
        </div>
      </div>
    );
  }
}

export default App;
