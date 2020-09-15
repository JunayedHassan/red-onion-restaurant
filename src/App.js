// import { Menu, Switch } from '@material-ui/core';
import React from 'react';
// import { Route, Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Foods from './Components/Foods/Foods';
import Footer from './Components/Footer/Footer';
import Container from '@material-ui/core/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Header></Header>
      <Foods></Foods>

      <Footer></Footer>
    </div>
  );
}

export default App;
