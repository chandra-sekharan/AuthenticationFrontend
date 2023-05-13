import React,{useState,createContext, useEffect} from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './nav';
import Profile from './profile';

export const store = createContext();

function App() {

  const [token ,setToken]=useState(null)
  
  
  return (
    <store.Provider value={[token,setToken]}>
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/myprofile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    </store.Provider>
  );
}

export default App;
