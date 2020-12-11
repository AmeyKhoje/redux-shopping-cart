import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1/Demo1'
import Header from './Header/Header'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Toast from './components/Toast/Toast'
import { AuthContext } from './context/context'

function App() {
  const [ isDarkMode, setIsDarkMode ] = useState(false)

  const darkModeHandler = () => {
      setIsDarkMode( prevMode => !prevMode )
  }
  // console.log(isDarkMode);
  return (
    <AuthContext.Provider value={{isDark: isDarkMode}}>
        <div className="App">
          <Router>
              <Header darkMode={darkModeHandler} />
              <Toast Text="Hello" />
              <Route path="/" exact>
                  <Demo1 />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
              <Route path="/checkout">
                  <Checkout />
              </Route>
          </Router>
          <ToastContainer />
        </div>
    </AuthContext.Provider>
  );
}

export default App;
