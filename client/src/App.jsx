import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUp from './components/SignupPage';
import LocationPage from './components/LocationPage';
import AboutPage from './components/AboutPage';
import StorePage from './components/Store';
// import TestPage from './components/TestPage';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Footer from './components/Footer';


const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
    <NavBar token={token} setToken={setToken} />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage setToken={setToken}/>}/>
      <Route path="/signup" element={<SignUp setToken={setToken}/>}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/location" element={<LocationPage/>}/>
      <Route path="/store" element={<StorePage/>}/>
      {/* <Route path="/test" element={<TestPage/>}/> */}

    </Routes>
    <Footer/>
    </>
  );
};

export default App;
