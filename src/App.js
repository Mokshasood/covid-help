import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar.component";
import Landing from './components/Landing';
import Home from "./components/home.component";
import Stats from './components/stats.component';
import Essentials from './components/essentials.component';
import Precautions from './components/Precautions';
import Footer from './components/footer';

function App() {
  return (
    <Router>
    <div className="container">
      <NavBar/>
      <Route path="/" exact component={Landing}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/stats" exact component={Stats}/>
      <Route path="/precautions" exact component={Precautions}/>
      <Route path="/essentials" exact component={Essentials}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
