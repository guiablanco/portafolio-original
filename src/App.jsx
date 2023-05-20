import {Routes, Route} from 'react-router-dom';

//pages
import Layout from './components/container/Layout';
import HomeProfilePage from './pages/home/HomeProfilePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';

//style
import './App.css';
import Proyectos from './pages/proyectos-personales/proyectos';
import HomeTaskPage from './pages/homeTask/HomeTaskPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomeProfilePage/>}></Route>
          <Route path='login' element={<LoginPage/>}></Route>
          <Route path='register' element={<RegisterPage/>}></Route>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='faqs' element={<AboutPage/>}/>
          <Route path='proyectos' element={<Proyectos/>}/>
          <Route path='tasks/*' element={<HomeTaskPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
