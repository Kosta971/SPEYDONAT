import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8000/my-donations', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDonations(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Мои донаты</h1>
      <div className="space-y-4">
        {donations.map((donation) => (
          <div key={donation.id} className="border p-4 rounded shadow">
            <p>💰 Сумма: <strong>${donation.amount.toFixed(2)}</strong></p>
            <p>✉️ Сообщение: <i>{donation.message}</i></p>
            <p className="text-sm text-gray-400">🕓 {new Date(donation.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
