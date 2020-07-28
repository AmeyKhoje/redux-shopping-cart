import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1/Demo1'
import Header from './Header/Header'
import Cart from './Cart/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Route path="/" exact>
              <Demo1 />
          </Route>
          <Route path="/cart">
              <Cart />
          </Route>
      </Router>
    </div>
  );
}

export default App;
