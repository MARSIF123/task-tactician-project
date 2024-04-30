import './App.css';
import Header from './components/Header/Header';
import elipse from './assets/Ellipse 2.png'
import Main from './components/Main/Main';
import ErrorPage from './pages/ErrorPage';
import Login from './components/Login/Login';
import Features from './components/Features/Features';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    < div className="App">
      <div className='max-width-wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/features' element={<Features />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <div className='elipse'>
        <img src={elipse} ></img>
      </div>
    </div>
  );
}

export default App;
