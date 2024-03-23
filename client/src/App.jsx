import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer';
import HomeStore from './pages/HomeStore';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  // what is location.pathname?
  // location.pathname is the current URL of the page.
  const hideNavbar = ['/login', '/register'].includes(location.pathname);

  return (
    <div className='App'>
      <UserContextProvider>
        {!hideNavbar && <Navbar />}
        <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/homestore' element={<HomeStore/>}/>


        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  )
}

export default App;
