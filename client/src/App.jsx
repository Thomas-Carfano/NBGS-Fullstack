import './App.css'
import HomePage from './components/HomePage'
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUp from './components/SignupPage';


const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignUp />}/>

    </Routes>
    </>
  )
}

export default App
