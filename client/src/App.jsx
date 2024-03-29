import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUp from './components/SignupPage';
import StorePage from './components/Store';
import TestPage from './components/TestPage';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage';
import CartPage from './components/CartPage';


const App = () => {
  const [token, setToken] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
    <NavBar token={token}/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage setToken={setToken}/>}/>
        <Route path="/signup" element={<SignUp setToken={setToken}/>}/> 
        <Route path="/store" element={<StorePage setCartItems={setCartItems}/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/cart" element={<CartPage cartItems={cartItems}/>}/>
        <Route path="/test" element={<TestPage/>}/>
      </Routes>
    <Footer/>
    </>
  );
};

export default App;
