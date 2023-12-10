import './App.css';

import Aboutus from './pages/Aboutus';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Contact from './pages/Contact';
import Denied from './pages/Denied';
import CourseList from './pages/Course/CourseList';
import CourseDescription from './pages/Course/CourseDescription';
import CourseCreate from './pages/Course/CourseCreate';
import RequireAuth from './components/RequireAuth';
import Profile from './pages/User/Profile';
import EditProfile from './pages/User/EditProfile';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/login' element={<Signin/>} />
      <Route path='/contacts' element={<Contact/>} />
      <Route path='/denied' element={<Denied/>} />
      <Route path='/courses/description' element={<CourseDescription/>} />
      
      <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path='/user/me' element={<Profile/>}/>
        <Route path='/user/update' element={<EditProfile/>}/>
      </Route>

      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path='/courses/create' element={<CourseCreate/>}/>
      </Route>

      <Route path='/courses' element={<CourseList/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
