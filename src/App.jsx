import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>Welcome to Mindbo!</h2>;
const Login = () => {
  window.location.href = "/.auth/login/aad";
  return <p>Redirecting to login...</p>;
};
const Logout = () => {
  window.location.href = "/.auth/logout";
  return <p>Logging out...</p>;
};

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <div className="font-bold">Mindbo</div>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
