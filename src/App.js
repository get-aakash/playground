import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
 
  return (
    <div className="app">
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/dashboard' element={<Dashboard />} />

    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
