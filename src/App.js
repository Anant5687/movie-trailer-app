import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import Protected from './components/protected';
import Logo from './svgs/logo';

function App() {
  return (
    <div
      style={{
        padding: '24px',
      }}
    >
      <Logo />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected Component={Home} />} />
        <Route
          path="/details/:id"
          element={<Protected Component={Details} />}
        />
      </Routes>
    </div>
  );
}

export default App;
