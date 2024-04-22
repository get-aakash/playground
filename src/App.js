
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
