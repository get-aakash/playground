
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './components/userSlice';
import { auth } from './components/firebase-config/firebaseConfig';
import ResetPassword from './components/ResetPassword';
function App() {
  const dispatch = useDispatch()
  onAuthStateChanged(auth,(user)=>{
    const obj = {
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName
    }
    dispatch(setUser(obj))
  })

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
      <Route path='/reset-password' element={<ResetPassword />}/>
        

      </Routes>
      <ToastContainer />

    </div>




  );
}

export default App;
