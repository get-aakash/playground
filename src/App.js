
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
 
  return (
    <div className="app">
      <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/signup' element={<SignUp />} />
      
    </Routes>
    <ToastContainer />

    </div>
    
    
    
   
  );
}

export default App;
