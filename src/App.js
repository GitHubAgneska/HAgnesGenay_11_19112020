import './index.scss';
import Home from './components/containers/Home'

import Header  from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <div className="container">
            <Header/>
            <Home />
            <Footer />
      </div>
    </div>
  );
}

export default App;
