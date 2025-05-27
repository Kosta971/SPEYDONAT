import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DonatePage() {
  const { username } = useParams();
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const sendDonation = async () => {
    try {
      // В реальности — запрос на /api/get_user_id_by_username
      const res = await axios.get(`http://localhost:8000/streamer-id/${username}`);
      const streamerId = res.data.id;

      await axios.post('http://localhost:8000/donate', {
        streamer_id: streamerId,
        amount: parseFloat(amount),
        message,
      });
      setSent(true);
    } catch (e) {
      alert("Ошибка при отправке доната");
    }
  };

  if (sent) return <div className="text-center mt-20 text-green-600 text-xl">Спасибо за донат!</div>;

  return (
    <div className="max-w-md mx-auto mt-20 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Поддержать @{username}</h2>
      <input
        type="number"
        placeholder="Сумма (например, 10.00)"
        className="border p-2 w-full mb-3"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <textarea
        placeholder="Сообщение (опционально)"
        className="border p-2 w-full mb-3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendDonation} className="bg-purple-600 text-white px-4 py-2 rounded w-full">Отправить</button>
    </div>
  );
}
