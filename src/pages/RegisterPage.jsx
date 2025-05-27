import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    await axios.post('http://localhost:8000/register', { email, username, password });
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="border p-2 w-full mb-2" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-full mb-4" />
        <button onClick={register} className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </div>
    </div>
  );
}
