import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Profile from './components/profile/Profile';
import News from './components/body/News';
import Header from './components/header/Header';
import Register from './components/login/Register';
import Login from './components/login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<News/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
