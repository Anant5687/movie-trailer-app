import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import Protected from './components/protected';

function App() {
  return (
    <div
      style={{
        padding: '24px',
      }}
    >
      <svg
        width="180"
        height="50"
        viewBox="0 0 180 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="12" fill="#4FC3F7" />
        <polygon points="22,18 30,25 22,32" fill="#000000" />

        <text
          x="50"
          y="30"
          font-family="Montserrat, sans-serif"
          font-size="20"
          fill="white"
          font-weight="bold"
        >
          Cine<tspan fill="#4FC3F7">Pulse</tspan>
        </text>
      </svg>

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
