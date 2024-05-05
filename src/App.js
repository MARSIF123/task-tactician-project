import './App.css';

import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login/Login';
import Features from './pages/Features/Features';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';


import UserContextProvider from './context/UserContextProvider';
import TasksContextProvider from './context/TasksContextProvider';
import MyTasks from './pages/MyTasks/MyTasks';
import { IconContext } from 'react-icons';
function App() {
  return (
    <UserContextProvider>
      <TasksContextProvider>
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/features' element={<Features />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my-tasks' element={<MyTasks />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </IconContext.Provider>
      </TasksContextProvider>
    </UserContextProvider>

  );
}

export default App;
