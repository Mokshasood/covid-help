import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Stylesheet/index.css";
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Stats from './components/stats.component';
import Vaccine from './components/vaccine.component';
import Essentials from './components/essentials.component';
import Footer from './components/footer';
import Landing from './components/Landing';
import Precautions from './components/Precautions';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar/>
      <Route path="/" exact component={Landing}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/stats" exact component={Stats}/>
      <Route path="/vaccine" exact component={Precautions}/>
      <Route path="/essentials" exact component={Essentials}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
