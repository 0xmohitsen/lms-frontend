import './App.css';

import Aboutus from './pages/Aboutus';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
