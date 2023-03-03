import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import Example from './Pages/Example'

function App() {
  return (
    <Router>
      <Routes >
    
        <Route path="/signup" element={<Signup />}/>
          
        <Route path="/home" element={<Example />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/" element={<Login />}/>

      </Routes >
    </Router>
  );
}

export default App;