import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../api';
import toast from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginAdmin(username, password);
      localStorage.setItem('admin_token', res.data.access_token);
      toast.success("Logged in successfully");
      navigate('/admin/dashboard');
    } catch (err) {
      if (!err.response) {
        toast.error("Backend unavailable. Please check your server.");
      } else if (err.response.status === 401) {
        toast.error("Invalid credentials. Please try again.");
      } else if (err.response.status === 404) {
        toast.error("Wrong endpoint. API Not Found.");
      } else {
        toast.error(err.response?.data?.detail || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-main">
      <div className="glass-panel p-8 max-w-md w-full">
        <h2 className="text-3xl font-heading font-bold text-white mb-6 text-center">Admin Access</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-text-muted mb-2 font-mono text-sm">Username / Email</label>
            <input 
              type="text" 
              required
              className="w-full bg-card-bg border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-colors"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-text-muted mb-2 font-mono text-sm">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-card-bg border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-accent text-bg-main font-bold py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
