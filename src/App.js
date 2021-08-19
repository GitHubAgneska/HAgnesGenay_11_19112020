import React, {Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header  from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/containers/Home'
import NotFoundPage from './components/containers/404'
import About from './components/containers/About'
import Rental from './components/containers/Rental'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

/* const apiUrl = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
const myHeaders = new Headers();
const myRequest = new Request( apiUrl, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors', //  mode: 'no-cors' ? 
    cache: 'default',
    credentials: 'include'
}); */

// each top-level feature declares its own route
// Fragment used here because Router can't have multiple children
const App = () =>  {
  
  /* const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(()=> {
    fetch(myRequest)
      .then(response => {
        if (response.ok) { return response.json() } throw response })
      .then(data => { setData(data);console.log(data) })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      })
      .finally(()=> { setLoading(false)})
  }, [])
  

  if (loading) return 'Loading..';
  if (error) return 'Error!'; */

    return (
      <div className="App">
        <div className="container">
              <Header/>
              <Router>
                <Fragment>

                  <Route exact path="/" render={() => <Redirect to="/home" />} />
                  
                  <Route exact path="/home" component={Home} />

                  <Route exact path="/rental/:id" component={Rental} />
                  <Route exact path="/about" component={About} />
                  {/* <Route component={NotFoundPage} /> */}
                  <Route exact path="/404" component={NotFoundPage} />

                </Fragment>
              </Router>
      
              <Footer />
        </div>
      </div>
    );
}

export default App




/* if fetch in app component:
  
  <Route 
  exact path="/home" 
  render={() => (
    <> 
      {data.length > 0?(
        <Home rentals={data} />
      ):('loading')} </>) } />  */
    

