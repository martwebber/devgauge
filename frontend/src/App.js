import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Assessments } from './pages/assessments';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login/LoginForm';
import { SignUp } from './pages/signup/signupform';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" ></Route>
      <Route path="about" ></Route>
      <Route path="assessments" element={<Assessments/>}></Route>
      <Route path="blog" ></Route>
      <Route path="contacts" ></Route>
      <Route path="signup" element={<SignUp/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;