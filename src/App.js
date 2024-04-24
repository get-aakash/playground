
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/privateRoute/PrivateRoute';
function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route 
        path='dashboard' 
        element = {
          <PrivateRoute>
          <Dashboard />
          </PrivateRoute>
        
      } 
      />
        

      </Routes>
      <ToastContainer />

    </div>




  );
}

export default App;
