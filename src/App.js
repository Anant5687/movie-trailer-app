import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  );
}

export default App;
