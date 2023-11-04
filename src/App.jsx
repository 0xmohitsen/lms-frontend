import './App.css';

import Aboutus from './pages/Aboutus';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Contact from './pages/Contact';
import Denied from './pages/Denied';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/login' element={<Signin/>} />
      <Route path='/contacts' element={<Contact/>} />
      <Route path='/denied' element={<Denied/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
