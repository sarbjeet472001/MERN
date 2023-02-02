
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Logout from './components/Logout';
import { createContext } from 'react';
import { useReducer } from 'react';
import { initialState,reducer } from '../src/reducer/UseReducer';

export const UserContext=createContext();

const Routing=()=>{
  return(
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  )
}
function App() {

  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routing/>
    </UserContext.Provider>
    </>
  );
}

export default App;
