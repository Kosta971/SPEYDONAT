import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post('http://localhost:8000/login', { email, password });
    localStorage.setItem('token', res.data.access_token);
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-full mb-4" />
        <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">Log in</button>
      </div>
    </div>
  );
}
